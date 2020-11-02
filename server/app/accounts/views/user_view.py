from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from app.accounts.models import User
from app.accounts.serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
