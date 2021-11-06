from django.db import models
from django.urls import reverse
# Create your models here.


class Widget(models.Model):
    description = models.CharField(max_length=900)
    quantity = models.IntegerField()

    def __str__(self) -> str:
        return super().__str__()
    def get_absolute_url(self):
        return reverse('widgets_detail', kwargs={'pk': self.id})
