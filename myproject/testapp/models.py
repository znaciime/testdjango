from django.db import models

# Create your models here.
class Userz(models.Model):
    name=models.CharField(max_length=20)
    lastname=models.TextField()
    age=models.TextField()
    ocupation=models.TextField()
    image=models.TextField(default=' ')

    def __str__(self):
        return self.name

class Postz(models.Model):
    title=models.CharField(max_length=30)
    type_of_post=models.CharField(max_length=10)
    url=models.TextField()
    owner=models.TextField()

    def __str__(self):
        return self.title