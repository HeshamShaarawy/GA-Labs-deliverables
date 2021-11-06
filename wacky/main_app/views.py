from django.forms import Widget, widgets
from django.views.generic.base import TemplateView
from .models import Widget
from .forms import WidgetForm
from django.views.generic import ListView
from django.views.generic.edit import DeleteView, CreateView, FormView
from django.shortcuts import redirect, render
from django.db.models import Sum


class WidgetCreateView(CreateView):
    model =  Widget
    

class WidgetIndex(ListView):
  model = Widget
  template_name = 'widgets/index.html'
  context_object_name = 'widget'
  form_widget = WidgetForm()
  def get_context_data(self, **kwargs):
          # Call the base implementation first to get a context
    context = super().get_context_data(**kwargs)
         # Add in a QuerySet of all the books
    context['widget_form'] = WidgetForm()
    total_quantity = Widget.objects.all().aggregate(Sum('quantity'))
    context['total_quantity'] = total_quantity['quantity__sum']
    return context
  

class WidgetDelete(DeleteView):
    model = Widget
    success_url = '/cbv'


def index (request):
    widget = Widget.objects.all()
    total_quantity = Widget.objects.all().aggregate(Sum('quantity'))
    total_quantity_sum = total_quantity['quantity__sum']
    widget_form = WidgetForm()
    return render(request, 'widgets/index.html',{
        'widget': widget, 'widget_form': widget_form,
        'total_quantity': total_quantity_sum
  })

def widget_create(request):
  form = WidgetForm(request.POST)
  if form.is_valid():
    new_widget = form.save(commit=False)
    new_widget.save()
  return redirect('/')



def widget_delete(request):
  Widget.objects.filter(id=id).delete()
  return redirect('/')

