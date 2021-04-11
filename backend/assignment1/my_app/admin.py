from django.contrib import admin

# Register your models here.
from .models import Video, comment

admin.site.register(comment)

class VideoAdmin(admin.ModelAdmin):
    search_fields = ['subject']

admin.site.register(Video, VideoAdmin)