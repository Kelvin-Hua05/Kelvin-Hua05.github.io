import os,re,sys
from urllib.parse import urlparse
root='dist'; base=sys.argv[1] if len(sys.argv)>1 else '/'
bad=0; pages=0
for dp,_,fs in os.walk(root):
    for f in fs:
        if not f.endswith('.html'): continue
        pages+=1
        h=open(os.path.join(dp,f),encoding='utf8').read()
        for m in re.finditer(r'(?:href|src)="([^"]+)"',h):
            u=m.group(1)
            if re.match(r'(https?:|mailto:|#|data:)',u): continue
            p=urlparse(u).path
            if not p.startswith(base): print('NOBASE',f,u); bad+=1; continue
            rel=p[len(base):].lstrip('/')
            t=os.path.join(root,rel)
            ok=os.path.isfile(t) or os.path.isfile(os.path.join(t,'index.html'))
            if not ok: print('BROKEN',os.path.join(dp,f),u); bad+=1
            if p.endswith('/') is False and '.' not in os.path.basename(p): print('NOSLASH',f,u); bad+=1
print('pages',pages,'problems',bad)
