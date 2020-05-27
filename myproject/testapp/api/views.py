from rest_framework.generics import ListAPIView, RetrieveAPIView
from testapp.models import Userz
from testapp.models import Postz
from .serializers import UserSerializer
from .serializers import PostSerializer

class Userlistview(ListAPIView):
    queryset=Userz.objects.all()
    serializer_class = UserSerializer

class Userdetailview(RetrieveAPIView):
    queryset=Userz.objects.all()
    serializer_class = UserSerializer

class PostListView(ListAPIView):
    queryset=Postz.objects.all()
    serializer_class=PostSerializer
 