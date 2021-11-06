from django.forms import Widget
from .models import Widget
from .forms import WidgetForm
from django.views.generic.edit import DeleteView
from django.shortcuts import redirect, render
from django.db.models import Sum




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


class WidgetDelete(DeleteView):
    model = Widget
    success_url = '/'



