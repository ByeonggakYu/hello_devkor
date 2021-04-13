from django.db import models

# Create your models here.
class Item(models.Model):
    image = models.ImageField(null=False, blank=False)
    price = models.PositiveIntegerField(blank=False, null=False)
    description = models.TextField(null=True, blank=True)
    create_date = models.DateTimeField(auto_now=True)
