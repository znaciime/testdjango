from rest_framework import serializers
from testapp.models import Userz
from testapp.models import Postz

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=Userz
        fields=('name', 'lastname', 'age', 'ocupation', 'image')

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model=Postz
        fields=('title', 'type_of_post', 'url', 'owner')