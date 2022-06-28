export default {
  help: 'Print list available commands',
  up: 'Go upper from current directory',
  cd: '[PATH_TO_DIRECTORY] - Go to dedicated folder from current directory',
  ls: 'List all files and folder in current directory and print it to console',
  cat: "[PATH_TO_FILE] - Read file and print it's content in console",
  add: '[NEW_FILE_NAME] - Create empty file in current working directory',
  rn: '[PATH_TO_FILE] [NEW_FILE_NAME] - Rename file',
  cp: '[PATH_TO_FILE] [PATH_TO_NEW_DIRECTORY] - Copy file',
  mv: '[PATH_TO_FILE] [PATH_TO_NEW_DIRECTORY] - Move file',
  rm: '[PATH_TO_FILE] - Delete file',
  os: '--[EOL/cpus/homedir/username/architecture] - Operating system info, use with flags',
  hash: '[PATH_TO_FILE] - Calculate hash for file and print it into console',
  compress: '[PATH_TO_FILE] [PATH_TO_DESTINATIONS] - Compress file',
  decompress: '[PATH_TO_FILE] [PATH_TO_DESTINATIONS] - Decompress file',
};