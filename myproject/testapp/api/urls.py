from django.urls import path
from .views import Userlistview
from .views import Userdetailview
from .views import PostListView

urlpatterns=[
    
    path('', Userlistview.as_view()),
    path('<pk>', Userdetailview.as_view()),
    path('posts/', PostListView.as_view()),
]