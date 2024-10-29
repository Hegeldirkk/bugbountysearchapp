import type { APIRoute } from 'astro';

// Google Dorks database from EC-Council
export const DORKS_DATABASE = {
       
    "Configuration Files": [
      {
        dork: 'ext:xml | ext:conf | ext:cnf | ext:reg | ext:inf | ext:rdp | ext:cfg | ext:txt | ext:ora | ext:ini',
        description: "Find exposed configuration files"
      },
      {
        dork: 'ext:sql | ext:dbf | ext:mdb',
        description: "Find exposed database files"
      }
    ],
    "Login Pages": [
      {
        dork: 'inurl:login | inurl:signin | intitle:Login',
        description: "Find login portals"
      },
      {
        dork: 'inurl:admin inurl:login',
        description: "Find admin login pages"
      }
    ],
    "Sensitive Information": [
      {
        dork: 'site:pastebin.com password',
        description: "Find leaked passwords on Pastebin"
      },
      {
        dork: 'intext:"ssh-rsa" | intext:"PRIVATE KEY"',
        description: "Find exposed SSH keys"
      }
    ],
    "Error Messages": [
      {
        dork: 'intext:"sql syntax near" | intext:"syntax error has occurred" | intext:"incorrect syntax near"',
        description: "Find SQL error messages"
      },
      {
        dork: '"PHP Error" | "PHP Warning" | "PHP Debug"',
        description: "Find PHP error messages"
      }
    ],
    "File Types": [
        {
          dork: 'filetype:pdf "confidential"',
          description: "Search for confidential PDF files"
        },
        {
          dork: 'filetype:xls "username" OR "password"',
          description: "Search for Excel files containing credentials"
        },
        {
          dork: 'filetype:txt "password.txt"',
          description: "Search for text files with passwords"
        },
        {
          dork: 'filetype:torrent torrent',
          description: "Search for torrent files"
        },
        {
          dork: 'filetype:ini Desktop.ini intext:mydocs.dll',
          description: "Finds any web shared windows folder inside my docs"
        }
      ],
    "VPN Footprinting": [
    {
      dork: 'filetype:pcf "cisco" "GroupPwd"',
      description: "Finds Cisco VPN files with group passwords for remote access"
    },
    {
      dork: '"[main]" "enc_GroupPwd=" ext:txt',
      description: "Finds Cisco VPN client passwords"
    },
    {
      dork: '"Config" intitle:"Index of" intext:vpn',
      description: "Finds directory with keys of VPN servers"
    },
    {
      dork: 'inurl:/remote/login?lang=en',
      description: "Finds FortiGate Firewall's SSL-VPN login portal"
    },
    {
      dork: '!Host=*.* intext:enc_UserPassword=* ext:pcf',
      description: "Look for .pcf files which contain user VPN profiles"
    },
    {
      dork: 'filetype:rcf inurl:vpn',
      description: "Finds Sonicwall Global VPN Client files containing sensitive information and login details"
    },
    {
      dork: 'filetype:pcf vpn OR Group',
      description: "Finds publicly accessible profile configuration files (.pcf) used by VPN clients"
    },
    {
      dork: 'vpnssl',
      description: "Retrieves login portals containing VPNSSL companies’ access"
    },
    {
      dork: 'intitle:"SSL VPN Service" + intext:"Your system administrator provided the following information to help understand and remedy the security conditions:"',
      description: "Finds Cisco ASA login web pages"
    },
    {
      dork: 'site:vpn.*.*/ intitle:"login"',
      description: "Retrieves pages containing VPN login portals"
    },
    {
      dork: 'Index of / *.ovpn',
      description: "Finds OpenVPN configuration files, certs, and keys"
    },
    {
      dork: 'inurl:"/vpn/tmindex.html"',
      description: "Finds Netscaler & Citrix Gateway VPN login portals"
    },
    {
      dork: 'intitle:"inc. vpn 3000 concentrator"',
      description: "Shows the login page for Cisco VPN 3000 concentrators"
    },
    {
      dork: '"Config" intitle:"Index of" intext:vpn',
      description: "Finds directory with keys of VPN servers"
    },
    {
      dork: '"intitle:Cisco Systems, Inc. VPN 3000 Concentrator"',
      description: "Finds Cisco VPN 3000 Concentrator login pages for remote access"
    }
  ],
  "VoIP Footprinting": [
    {
      dork: 'intitle:"Login Page" intext:"Phone Adapter Configuration Utility" inurl:/voice/advanced/',
      description: "Pages containing login portals for VoIP configuration utilities"
    },
    {
      dork: 'intitle:Linksys SPA configuration',
      description: "Finds the Linksys VoIP router configuration page"
    },
    {
      dork: 'intitle:"D-Link VoIP Router" "Welcome"',
      description: "Pages containing D-Link login portals"
    },
    {
      dork: 'intitle:asterisk.management.portal web-access',
      description: "Look for the Asterisk management portal"
    },
    {
      dork: 'intitle:"SPA504G Configuration"',
      description: "Finds Cisco SPA504G Configuration Utility for IP phones"
    },
    {
      dork: 'intitle:"Sipura.SPA.Configuration" -.pdf',
      description: "Finds configuration pages for online VoIP devices"
    },
    {
      dork: 'intitle:asterisk.management.portal web-access',
      description: "Finds the Asterisk web management portal"
    },
    {
      dork: 'inurl:8080 intitle:"login" intext:"UserLogin" "English"',
      description: "Finds VoIP login portals"
    }
  ],
  "FTP Footprinting": [
    {
      dork: 'inurl:github.com intext:.ftpconfig -issues',
      description: "Returns SFTP/FTP server credentials on Github"
    },
    {
      dork: 'type:mil inurl:ftp ext:pdf | ps',
      description: "Returns sensitive directories on FTP servers"
    },
    {
      dork: 'intext:pure-ftpd.conf intitle:index of',
      description: "Finds servers exposing pure-ftpd configuration files"
    },
    {
      dork: 'intitle:"Index Of" intext:sftp-config.json',
      description: "Extracts list of FTP/SFTP passwords from Sublime Text"
    },
    {
      dork: 'inurl:"ftp://www." "Index of /"',
      description: "Displays various online FTP servers"
    },
    {
      dork: 'inurl:~/ftp://193 filetype:(php | txt | html | asp | xml | cnf | sh) ~\'/html\'',
      description: "Returns a list of FTP servers by IP address, often Windows NT servers with guest login capabilities"
    },
    {
      dork: 'inurl:github.com intext:sftp-conf.json +intext:/wp-content/',
      description: "Finds FTP logins and full path disclosures pushed to GitHub"
    },
    {
      dork: 'intitle:"index of" "ftp.passwd"',
      description: "Finds files containing FTP passwords"
    },
    {
      dork: 'inurl:ftp://ftp robots.txt',
      description: "Finds robots.txt files in FTP sites"
    },
    {
      dork: 'intitle:"FTP root at"',
      description: "Returns some FTP root directories"
    },
    {
      dork: '"index of/" "ws_ftp.ini" "parent directory"',
      description: "Cleans up entries to locate sensitive ws_ftp.ini files"
    },
    {
      dork: 'filetype:conf inurl:proftpd.conf -sample',
      description: "Finds standard FTP configuration files that expose sensitive server setup details"
    },
    {
      dork: 'filetype:url +inurl:"ftp://" +inurl:"@"',
      description: "Finds FTP bookmarks, some of which contain plaintext login names and passwords"
    }
  ],
  "Web Shells and Exploits": [
    {
      dork: 'inurl:"Authorization" "Please enter your password"',
      description: "Finds web pages that require authorization, potentially revealing sensitive areas."
    },
    {
      dork: 'intitle:"SN0X SHELL:"',
      description: "Finds unprotected botnet control panels."
    },
    {
      dork: 'inurl:sh3llZ/c99/ind',
      description: "Finds c99 shells uploaded on websites."
    },
    {
      dork: 'intitle:"Web Data Administrator - Login"',
      description: "Finds the Web Data Administrator login page, potentially revealing sensitive data."
    },
    {
      dork: 'intitle:"WSO 2.4"',
      description: "Finds WSO 2.4 web shells uploaded by hackers."
    },
    {
      dork: 'inurl:"go.cgi?url="',
      description: "Finds pages that can be exploited for redirection."
    },
    {
      dork: 'inurl:revslider inurl:update_extract',
      description: "Finds uploaded shells related to the Revslider vulnerability."
    },
    {
      dork: 'intitle:"Hamdida X_Shell Backd00r"',
      description: "Finds backdoors in web applications."
    },
    {
      dork: 'intitle:"PHP Shell *" "Enable stderr" filetype:php',
      description: "Finds PHP shells that execute arbitrary commands."
    },
    {
      dork: 'inurl:root.asp?acs=anon',
      description: "Accesses Outlook Web Access Public Folders directly."
    },
    {
      dork: 'inurl:1337w0rm.php',
      description: "Finds websites with the 1337w0rm CPanel cracker uploaded."
    },
    {
      dork: 'allintext:"fs-admin.php"',
      description: "Finds footholds using the fs-admin plugin in WordPress."
    },
    {
      dork: 'intitle:"ERROR: The requested URL could not be retrieved"',
      description: "Finds Squid error messages from reverse proxy servers."
    },
    {
      dork: 'filetype:php intext:"!C99Shell v. 1.0 beta"',
      description: "Finds C99 backdoors on websites."
    },
    {
      dork: 'intext:"webalizer" +intext:"Total Usernames"',
      description: "Finds usernames logged into sites using Webalizer."
    },
    {
      dork: 'inurl:php inurl:hlstats intext:"Server Username"',
      description: "Finds half-life stat scripts revealing usernames."
    }
  ],
  "Directory Listings": [
          {
            dork: 'intitle:"Index of /" "parent directory"',
            description: "Find exposed directory listings"
          },
          {
            dork: 'intitle:"Index of" inurl:admin',
            description: "Find exposed admin directories"
          },
          {
            dork: '"Directory Listing for" "Hosted by Xerver"',
            description: "Directory listing for Xerver web server"
          },
          {
            dork: 'intitle:"Folder Listing" "Folder Listing" Name Size Date/Time File Folder',
            description: "Directory listing for Fastream NETFile Web Server"
          },
          {
            dork: '"Welcome to the directory listing of" "NetworkActiv-Web-Server"',
            description: "NetworkActiv-Web-Server directory listing"
          },
          {
            dork: 'intitle:index.of cisco asa -site:cisco.com',
            description: "Google search for Pix/Asa images"
          },
          {
            dork: 'intitle:index.of ios -site:cisco.com',
            description: "Google search for Cisco IOS images"
          },
          {
            dork: 'intitle:index.of.config',
            description: "Give information about web servers configuration"
          },
          {
            dork: 'intitle:index.of WEB-INF',
            description: "Finds java powered web servers which have indexing enabled on their config directory"
          },
          {
            dork: 'intitle:index.of /maildir/new/',
            description: "Provides mailbox dir. that contains a lot of mails"
          },
          {
            dork: '"Index of" rar r01 nfo Modified 2004',
            description: "New Warez Directory Lists"
          }
        ],
  };
