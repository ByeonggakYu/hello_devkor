from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views import View
from django.utils import timezone

from .models import Video, comment
from django.shortcuts import render, get_object_or_404, redirect
# Create your views here.

def get(request, Video_id):
    get_video = Video.objects.get(pk=Video_id)
    return JsonResponse({
        'subject':get_video.subject,
        'content':get_video.content,
        'create_date':get_video.create_date
    })

def delete(request, Video_id):
    delete_video = Video.objects.get(pk=Video_id)
    delete_video.delete()
    return redirect('/my_app/')

def update(request, Video_id):
    update_video = Video.objects.get(pk=Video_id)
    update_video.subject = request.POST.get('subject')
    update_video.content = request.POST.get('content')
    update_video.save()
    return redirect('/my_app/')

def edit(request, Video_id):
    edit_video = Video.objects.get(pk=Video_id)
    context = {'edit_video':edit_video}
    return render(request, 'my_app/Video_edit.html', context)

def list(request):
    Video_list = Video.objects.order_by('-create_date')
    context = {'Video_list':Video_list}
    return render(request, 'my_app/Video_list.html', context) # render 함수는 context 에 있는 데이터를
    #video_list.html파일에 적용하여 html 코드로 변환한다. 장고에서는 video_list.html 같은 파일을 템플릿이라고 한다.

def detail(request, Video_id):
    OneVideo = get_object_or_404(Video, pk=Video_id)
    context = {'OneVideo':OneVideo}
    return render(request, 'my_app/Video_detail.html', context)
    
def comment_create(request, Video_id):
    video = get_object_or_404(Video, pk=Video_id)
    new_comment = comment(subject=video, content=request.POST.get('content'), create_date=timezone.now())
    new_comment.save()
    return redirect('my_app:detail', Video_id=video.id)

"""
@api_view(['GET','POST'])
def index(request):
    return Response({
        'status' : status.HTTP_200_OK,
        'req_method' : request.method
    })
"""

"""
def detail(request, Video_id):
    vVideo = get_object_or_404(Video, pk=Video_id)
    context = {'vVideo': vVideo}
    return render(request, 'my_app/Video_detail.html', context)


def video(request):
    return HttpResponse("<h1>비디오 쭈루룩 있는 화면</h1>")
"""
