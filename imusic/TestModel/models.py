from django.db import models

# Create your models here.
class song_sex(models.Model):
    singer_name = models.CharField(max_length=20)
    sex = models.CharField(max_length=20)