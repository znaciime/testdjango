from rest_framework import serializers
from .models import Userz
from .models import Postz

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=Userz
        fields=('name', 'lastname', 'age', 'ocupation')

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model=Postz
        fields=('title', 'type_of_post', 'url', 'owner')