from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=100)
    synopsis = models.CharField(max_length=200)
    duration = models.IntegerField()
    director = models.CharField(max_length=100)
    rank = models.IntegerField()
