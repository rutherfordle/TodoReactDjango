from django.db import models
from django.contrib.auth.models import User


class Todo(models.Model):
    todoItems = models.CharField(max_length=100)
    isComplete = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
