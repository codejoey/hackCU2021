#for paths
import sys
import pathlib

root_dir = pathlib.Path().absolute()

if sys.platform.startswith('win32'):
    #TRAINING_FILES_PATH = str(root_dir) + '\\features\\'
    #SAVE_DIR_PATH = str(root_dir) + '\\joblib_features\\'
    #MODEL_DIR_PATH = str(root_dir) + '\\model\\'
    #TESS_ORIGINAL_FOLDER_PATH = str(root_dir) + '\\TESS_Toronto_emotional_speech_set_data\\'
    base_dir = str(root_dir) + '\\projects\\'
else:
    #TRAINING_FILES_PATH = str(root_dir) + '/features/'
    #SAVE_DIR_PATH = str(root_dir) + '/joblib_features/'
    #MODEL_DIR_PATH = str(root_dir) + '/models/'
    #TESS_ORIGINAL_FOLDER_PATH = str(root_dir) + '/TESS_Toronto_emotional_speech_set_data/'
    base_dir = str(root_dir) + '/projects/'