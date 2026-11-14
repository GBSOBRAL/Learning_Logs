from django import forms
from .models import Topic, Entry

class TopicForm(forms.ModelForm):
    class Meta:
        model = Topic
        fields = ['text']
        labels = {'text' : ''}
        widgets = {'text' : forms.TextInput(attrs={'placeholder': 'Ex.: Python'})}

class EntryForm(forms.ModelForm):
    class Meta:
        model = Entry
        fields = ['text']
        labels = {'text' : ''}
        widgets = {'text' : forms.Textarea(attrs={'rows': 10, 'placeholder': 'O que você aprendeu?'})}