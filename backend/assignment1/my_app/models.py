from django.db import models

# Create your models here.

class Video(models.Model):
    subject = models.CharField(max_length=200) #CharField 는 글자수 제한이 있는 데이터
    content = models.TextField() #Textfield 는 글자수 제한이 없는 데이터
    create_date = models.DateTimeField()
    
    def __str__(self):
        return self.subject

class comment(models.Model):
    subject = models.ForeignKey(Video, on_delete=models.CASCADE)
    content = models.TextField()
    create_date = models.DateTimeField()

    def __str__(self):
        return self.subject.subject

    
