from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Userz
from .serializers import UserSerializer

from rest_framework.response import Response
from rest_framework.views import APIView

class Test(APIView):
   
    def get(self, request , *args, **kwargs):
        qs=Userz.objects.all()
        post = qs.first()
        serializer = UserSerializer(post)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)
        serializer.save()
        return Response(serializer.data)

    