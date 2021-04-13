from django.shortcuts import render, get_object_or_404

# Create your views here.

def detail(request, item_id):
    item = get_object_or_404(Item, pk=item_id)
    context = {'item':item}
    return render(request, 'pybo/item_detail.html', context)
