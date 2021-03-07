#for paths
import sys
import pathlib

working_dir_path = pathlib.Path().absolute()

if sys.platform.startswith('win32'):
    TRAINING_FILES_PATH = str(working_dir_path) + '\\features\\'
    SAVE_DIR_PATH = str(working_dir_path) + '\\joblib_features\\'
    MODEL_DIR_PATH = str(working_dir_path) + '\\model\\'
    TESS_ORIGINAL_FOLDER_PATH = str(working_dir_path) + '\\TESS_Toronto_emotional_speech_set_data\\'
    EXAMPLES_PATH = str(working_dir_path) + '\\examples\\'
else:
    TRAINING_FILES_PATH = str(working_dir_path) + '/features/'
    SAVE_DIR_PATH = str(working_dir_path) + '/joblib_features/'
    MODEL_DIR_PATH = str(working_dir_path) + '/models/'
    TESS_ORIGINAL_FOLDER_PATH = str(working_dir_path) + '/TESS_Toronto_emotional_speech_set_data/'
    EXAMPLES_PATH = str(working_dir_path) + '/audio/'