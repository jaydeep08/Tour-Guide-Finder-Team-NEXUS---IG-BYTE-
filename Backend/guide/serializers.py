from rest_framework import serializers
from .models import *

class Personal_InfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Personal_Info
        fields='__all__'


class Guide_CitySerializer(serializers.ModelSerializer):

    class Meta:
        model = guide_city
        fields='__all__'


class Guide_LanguageSerializer(serializers.ModelSerializer):

    class Meta:
        model = guide_language
        fields='__all__'

class Guide_SpecificationSerializer(serializers.ModelSerializer):

    class Meta:
        model = guide_specilization
        fields='__all__'