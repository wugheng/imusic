#-*- coding: UTF-8 -*-
#import mysql.connector

from django.http import HttpResponse
import json
#
# conn = mysql.connector.connect(user='root', password='826209886', database='test_song')
#
# cursor = conn.cursor()
# cursor.execute("select singer_name from song_sex where sex = '%s'" % '男')
# values = cursor.fetchall()
# list=[]
# for row in values:
#     print(row[0])
#     list.append(row[0])
# cursor.close()
# conn.close()

def ajax_list(request):
    a = range(100)
    return HttpResponse(json.dumps(a), content_type='application/json')
