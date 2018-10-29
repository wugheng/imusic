#-*- coding: UTF-8 -*-

from django.http import HttpResponse
import json


def ajax_list(request):
    a = range(100)
    return HttpResponse(json.dumps(a), content_type='application/json')
