RED='\033[1;31m'
GREEN='\033[1;32m'
NOCOLOR='\033[0m'
TITLE='\033[0;33m'
GIT='\033[1;35m'
echo "Auto-Update"

echo -e "${TITLE}Phase One: ${GREEN}Pre-Configuring Packages${NOCOLOR}"
sudo dpkg --configure -a

echo

echo -e "${TITLE}Phase Two: ${GREEN}Fix & Attempt Broken Dependencies${NOCOLOR}"
sudo apt-get install -f

echo

echo -e "${TITLE}Phase Three: ${GREEN}Update Cache${NOCOLOR}"
sudo apt update

echo

echo -e "${TITLE}Phase Four: ${GREEN}Upgrade Packages${NOCOLOR}"
sudo apt upgrade

echo

echo -e "${TITLE}Phase Five: ${GREEN}Upgrade Distro${NOCOLOR}"
sudo apt dist-upgrade

echo

echo -e "${TITLE}Phase Six: ${GREEN}Uninstall Unused Packages${NOCOLOR}"
sudo apt --purge autoremove

echo

echo -e "${TITLE}Phase Seven: ${GREEN}Clean Up${NOCOLOR}"
sudo apt autoclean

echo

${GREEN}

echo Complete
