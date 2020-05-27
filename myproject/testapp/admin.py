from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Userz
from .models import Postz
# Register your models here.

admin.site.register(Userz)
admin.site.register(Postz)