from django.shortcuts import render,HttpResponse,redirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import EmailMessage

import uuid

from .models import *
from .serializers import *
# Create your views here.

@api_view(['POST'])
def create_profile(request):
    data = request.data
    u_uuid=''
    # email = data.email
    email = data['email']
    # email_obj = EmailMessage(to=[email])
    present=  Registrations.objects.filter(email=email).exists()
    print("PRESENT OR NOT : "+str(present))
    if not present:

        my_uuid = uuid.uuid4()

        # my_uuid_str = str(my_uuid)

        obj = Registrations(email=email,uuid=my_uuid)
        obj.save()

    else:
        return Response({'status':500,'message':"email is already registered"})    
        
    reg_data =  Registrations.objects.get(email=email)
    u_uuid = reg_data.uuid
    
    print("UUID IS : "+u_uuid)
    
    name = data['name']
    mobile= data['mobile']
    charges = data['charges']
    available = data['available']
    cities = data['cities']
    languages = data['languages']
    specilizations = data['specilizations']
    # available

    # print("name : "+name)
    # print("mobile :" +mobile)
    # print("charges "+ charges)
    # print("available : "+available)
    # print(cities)
    # print(languages)
    # print(specilizations)

    personal_obj = Personal_Info(uuid=u_uuid,name=name,mobile=mobile,charges=charges,available=available)
    personal_obj.save()

    for city in cities:
        city_obj = guide_city(uuid=u_uuid,name=city)
        city_obj.save()

    for language in languages:
        language_obj = guide_city(uuid=u_uuid,name=language)
        language_obj.save()

    for special in specilizations:
        spec_obj = guide_specilization(uuid=u_uuid,name=special)
        spec_obj.save()
        
        
        
        
    # print(data['email'])
    return Response({'status':200,'message':'MAIL PRINTED SUCCESSFULLY'})