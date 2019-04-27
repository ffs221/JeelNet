from django.contrib import admin
from .models import User, Type, Topic, Message

class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'type')
class TypeAdmin(admin.ModelAdmin):
    list_display = ('user_type',)
class TopicAdmin(admin.ModelAdmin):
    list_display = ('title',)

admin.site.register(User, UserAdmin)
admin.site.register(Type, TypeAdmin)
admin.site.register(Topic, TopicAdmin)