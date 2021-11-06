from django.urls import path
from . import views 

urlpatterns = [
    path('', views.index, name='index'),    
    path('create/', views.widget_create, name='widget_create' ),
    path('<int:pk>/delete/', views.WidgetDelete.as_view(), name='widget_delete'),
    path('add/', views.WidgetCreateView.as_view(), name='widget_add'),
    path('cbv/', views.WidgetIndex.as_view(), name='cbv_index'),
   
]