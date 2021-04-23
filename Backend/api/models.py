from django.contrib.postgres.fields import ArrayField
from django.db import models

# Create your models here.
class Account(models.Model):
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=300)
    phone = models.CharField(max_length=50)
    address = models.CharField(max_length=500)
    password = models.TextField()
    subscription = models.IntegerField()
    wishes = ArrayField(models.TextField())

    def __str__(self):
        return self.email

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'phone': self.phone,
            'address': self.address,
            'subscription': self.subscription,
            'wishes': self.wishes
        }