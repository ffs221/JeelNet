from django.db import models
from rest_framework import serializers
from django.contrib.auth.models import AbstractUser

class Type(models.Model):
    user_type = models.CharField (max_length=50, unique=True)
class Topic (models.Model):
    title = models.CharField(max_length=50, unique=True)
    def __init__(self):
         super(Topic, self).__init__()
    def __unicode__(self):
        return self.title

class Message(models.Model):
    subject = models.CharField(max_length=200)
    body = models.TextField()
    def __init__(self):
         super(Message, self).__init__()


class MessageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Message
        fields = ('url', 'subject', 'body', 'pk')

class User(AbstractUser):
    type = models.ForeignKey(Type, on_delete = models.CASCADE, blank = True, null=True, default='')
    #upload_to is specific to file/image upload, because they are large, uploading is optional 
    image = models.URLField(max_length=200, blank = True, null=True)
    #return username in the userprofile page
    topics = models.ManyToManyField(Topic, default=None)
    birthday = models.DateField('birthday', blank = True, null = True)
    messages = models.ManyToManyField(Message, default=None)
    def user_model_swapped(**kwargs):
        if kwargs['setting'] == 'AUTH_USER_MODEL':
            apps.clear_cache()
            from myapp import some_module
            some_module.UserModel = get_user_model()
    def __str__(self):
        return self.username
