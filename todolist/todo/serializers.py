from rest_framework import serializers
from todo.models import Todo

# Lead Serializer
class TodoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Todo
    fields = '__all__'