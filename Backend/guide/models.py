from django.db import models

# Create your models here.
class Registrations(models.Model):
    email = models.EmailField(null=False)
    uuid = models.CharField(max_length=255)


class Personal_Info(models.Model):
    uuid = models.ForeignKey(Registrations,on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    mobile = models.CharField(max_length=20)
    charges = models.IntegerField(default=200)
    available= models.BooleanField(default=True)


class guide_city(models.Model):
    uuid = models.ForeignKey(Registrations,on_delete=models.CASCADE)
    city_id = models.CharField(max_length=100)
    
class guide_language(models.Model):
    uuid = models.ForeignKey(Registrations,on_delete=models.CASCADE)
    language_id = models.CharField(max_length=100)

class guide_specilization(models.Model):
    uuid = models.ForeignKey(Registrations,on_delete=models.CASCADE)
    spceilization_id = models.CharField(max_length=100)
