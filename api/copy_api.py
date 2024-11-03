import os
import shutil

def copy_api_folder(src, dest):
    if not os.path.exists(dest):
        os.makedirs(dest)

    for item in os.listdir(src):
        s = os.path.join(src, item)
        d = os.path.join(dest, item)
        if os.path.isdir(s):
            if item == 'node_modules':
                continue
            shutil.copytree(s, d, dirs_exist_ok=True)
        else:
            shutil.copy2(s, d)

src = './'
dest = '../../bfinnoapi'

copy_api_folder(src, dest)
print(f"Copied contents of {src} to {dest}, excluding node_modules.")
