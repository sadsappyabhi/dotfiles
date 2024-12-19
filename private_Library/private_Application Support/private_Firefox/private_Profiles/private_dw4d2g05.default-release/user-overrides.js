/*
 *   _ | _  )  _ ) \ \  / __ __| __|   __|      _ \  _ \   __|
 *     |   /   _ \  \  /     |   _|  \__ \     (   |   /  (_ |
 *    _| ___| ___/   _|     _|  ___| ____/ _) \___/ _|_\ \___|
 *                      USER-OVERRIDES.JS FOR ARKENFOX USER.JS
 */

/*
 * name     : Firefox user-overrides.js supplement for arkenfox user.js
 * descrip. : this file is to be appended to the 'arkenfox' user.js for Firefox
 * version  : 128r1
 * author   : 12bytes.org
 * code     : https://codeberg.org/12bytes/Firefox-user.js-supplement
 * website  : The Firefox Privacy Guide For Dummies!
 *          : https://12bytes.org/the-firefox-privacy-guide-for-dummies/
 * website  : Firefox Configuration Guide for Privacy Freaks and Performance Buffs
 *          : https://12bytes.org/firefox-configuration-guide-for-privacy-freaks-and-performance-buffs/
 * website  : arkenfox user.js: https://github.com/arkenfox/user.js
 *
 * NOTE TO SELF: search for *TODO*
 */

/*
 * !!! IMPORTANT !!!        HOW TO WORK WITH THIS FILE         !!! IMPORTANT !!!
 * =============================================================================
 *
 * this file is an optional supplement that may be appended to the 'arkenfox'
 * user.js and used in conjunction with one of the 12bytes.org Firefox privacy
 * guides:
 * Firefox Configuration Guide for Privacy Freaks and Performance Buffs:
 * https://12bytes.org/firefox-configuration-guide-for-privacy-freaks-and-performance-buffs/
 * The Firefox Privacy Guide For Dummies!:
 * https://12bytes.org/the-firefox-privacy-guide-for-dummies/
 *
 * the versioning scheme for this file is 'NrN' where the first 'N' is a
 * number corresponding to the major version of Firefox for which this file is
 * intended, the 'r' stands for 'revision', and the last 'N' is the revision
 * number, so '999r3' would indicate this user-overrides file is for Firefox
 * version 999.x and it is the 3rd revision of the file.
 *
 * some preferences, or entire sections, may be tagged with one or more of the
 * following:
 *
 * [SET].............the value must be checked!!!
 * [UNBREAK=(value)].least likely to cause web breakage but more likely to compromise privacy
 * [SAFE=(value)]....a safe value
 * [PRIV=(value)]....a value which is more protective of privacy but may cause web breakage
 *
 * suggested values are marked with an asterisk (ex: [*PRIV=(value)] ).
 *
 * THIS FILE CONTAINS MY PERSONAL SETTINGS, SOME OF WHICH MAY NOT WORK FOR YOU
 * AND THEREFORE IT IS IMPORTANT TO GO THROUGH IT AND MAKE THE REQUIRED CHANGES.
 * AT A MINIMUM YOU SHOULD EVALUATE ALL SECTIONS AND PREFERENCES TAGGED WITH
 * [SET].
 *
 * TO MAKE UPDATING THIS FILE EASIER, DO NOT EDIT ANY EXISTING PREFERENCES
 * EXCEPT THOSE IN THE CUSTOM PREFERENCES SECTION. instead, copy the entire line
 * you want to change in this file, or the 'arkenfox' user.js file, to the
 * CUSTOM PREFERENCES section below and change the preference value there, then
 * when you update this file you can replace everything except your custom
 * preferences. to automate checking for updates you can use the
 * user.js-notify.sh script (Linux):
 * https://codeberg.org/12bytes/Firefox-user.js-supplement/src/branch/master/misc/user.js-notify.sh
 *
 * CUSTOM PREFERENCES THAT YOU ADD AND LATER REMOVE WILL REMAIN ACTIVE IN
 * PREFS.JS. to reset/remove a custom preference, comment it out by preceding it
 * with 2 forward slashes (//), then run the prefsCleaner script provided in the
 * 'arkenfox' repository (make sure Firefox is closed). see:
 * https://github.com/arkenfox/user.js/wiki/3.1-Resetting-Inactive-Prefs-[Scripts]
 *
 * WHEN YOU ARE FINISHED EDITING, append this file to the 'arkenfox' user.js
 * using their updater script, then run their prefsCleaner script.
 *
 * AFTER MAKE ANY CHANGES YOU MUST PERFORM THE FOLLOWING INTEGRITY CHECKS! (you
 * may want to disable your network connection):
 *
 * INTEGRITY CHECK 1: start Firefox and open the Browser Console from the
 * Firefox Web Developer toolbox (Ctrl+Shift+J might work) and check for any
 * error messages related to preferences. to find such errors, filter the output
 * using "user.js". following is a sample of what you might see in the console
 * if an error is found:
 *
 * /home/[user]/.mozilla/[profile name]/user.js:[line no.]: prefs parse error: [error description]
 *
 * [line no.] will be a line number corresponding to the line in the 'arkenfox'
 * user.js where the error lies, but you need to correct the error here, in this
 * file, and not worry about the user.js file. after the error is corrected, run
 * the 'arkenfox' updater script again and repeat the check.
 *
 * INTEGRITY CHECK 2: immediately upon starting Firefox with no tabs loaded
 * other than the default, load about:config in the address bar, search for the
 * "_user.js.parrot" troubleshooting preference and check that its value is
 * "SUCCESS! 12BYTES.ORG USER-OVERRIDES SETTINGS LOADED". if it is not then
 * there is a syntax error somewhere in this file in which case you need to
 * search the file for the value of the "_user.js.parrot" troubleshooting
 * preference you saw in about:config. the error will be between that point and
 * the very next "_user.js.parrot" troubleshooting preference. the following
 * regular expression may help to locate the error. the expression should
 * highlight all lines starting with 'user_pref' except those containing errors.
 *
 * ^user_pref\("\S+", (true|false|"[^"]*"|[0-9.]+)\);(\s|\n)
 */

/*
 * ==============================
 * [SET] TESTING / TEMPORARY TODO
 * ==============================
 *
 * these are preferences i'm testing, or which may appear in a future 'arkenfox'
 * user.js, or those for which the default value may change in a future version
 * of Firefox.
 *
 * if the value of the "_user.js.parrot" pref in about:config is "syntax error
 * @ TESTING" then there is a syntax error between this point and the very next
 * "_user.js.parrot" pref
 */
user_pref("_user.js.parrot", "syntax error @ TESTING"); // troubleshooting pref - do not edit
/**/
user_pref("layout.css.grid-template-masonry-value.enabled", true); // enable css masonry grid layout
user_pref("network.preconnect", false); // mitigate some privacy issues?
user_pref("dom.events.asyncClipboard.readText", false); // (v122+) disable new clipboard API which may be toggled on in future version
user_pref("dom.events.asyncClipboard.clipboardItem", false); // (v122+) disable new clipboard API which may be toggled on in future version
user_pref("browser.search.serpEventTelemetryCategorization.enabled", false); // search telemetry - 'false' by default, let's make sure it stays that way

/*
 * ====================
 * [SET] ARKENFOX DIFFS
 * ====================
 *
 * these prefs are duplicates of active 'arkenfox' user.js prefs, however with
 * different values.
 *
 * if the value of the "_user.js.parrot" pref in about:config is "syntax error
 * @ ARKENFOX DIFFS" then there is a syntax error between this point and the
 * very next "_user.js.parrot" troubleshooting pref.
 */
user_pref("_user.js.parrot", "syntax error @ ARKENFOX DIFFS"); // troubleshooting pref - do not edit
/**/
user_pref("browser.download.alwaysOpenPanel", true); // whether to open the download dialog for every download
user_pref("browser.formfill.enable", true); // [*PRIV=false] whether to remember search and form history
user_pref("browser.link.open_newwindow", 1); // controls when new window/tab should be opened - 1=open links that open new windows in current tab, 2=open links that open new windows in new window, 3=open links that open new windows in new tab
user_pref("browser.startup.page", 3); // what to load when Firefox starts - 0=a blank page, 1=your home page, 2=the last visited page, 3=restore the previous session - note that the previous session will not be restored if 'privacy.clearOnShutdown.history' is set to 'false'
user_pref("dom.security.https_only_mode_send_http_background_request", true); // [PRIV=false] whether to send HTTP requests to the server to test if it supports HTTPS if the server doesn't respond within 3 seconds
user_pref("privacy.clearOnShutdown.formdata", false); // whether to clear form and search history on shutdown - set to 'true' if sharing Firefox with another user
user_pref("privacy.clearOnShutdown.history", false); // whether to clear history on shutdown - set to 'true' if sharing Firefox with another user
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", false); // whether to clear history and form data on shutdown - set to 'true' if sharing Firefox with another user
user_pref("privacy.cpd.formdata", false); // whether to select the 'Form & search history' item for deletion when clearing history
user_pref("privacy.cpd.offlineApps", true); // whether to select the 'Offline website data' item for deletion when clearing history
user_pref("privacy.userContext.enabled", false); // whether to enable containers - containers are not strictly necessary with ETP set to "strict"
user_pref("security.cert_pinning.enforcement_level", 0); // [PRIV=0] [*SAFE=(1 or 2)] whether Firefox can check which certificate authorities issued SSL certificates for the site - 0=disabled 1=allow user MiTM (such as your antivirus), 2=strict - 2 may cause key pinning (HPKP) errors; MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE
user_pref("security.OCSP.enabled", 0); // [PRIV=0] [*SAFE=1] when to use OCSP fetching to confirm validity of certificates - 0=disabled, 1=enabled, 2=enabled for EV certificates only - you should typically NOT disable this
user_pref("security.ssl.require_safe_negotiation", false); // [UNBREAK=false] [*PRIV=true] whether to allow connections to servers that don't support SSL
user_pref("security.tls.version.enable-deprecated", true); // [UNBREAK=true] [*SAFE=false] whether to enable the use of older TLS versions
user_pref("signon.formlessCapture.enabled", true); // [*SAFE=false] whether password manager can capture login credentials when a proper login form is not detected

/*
 * ==================
 * CUSTOM PREFERENCES
 * ==================
 *
 *  !!! IMPORTANT !!!  !!! IMPORTANT !!!  !!! IMPORTANT !!!  !!! IMPORTANT !!!
 *  --------------------------------------------------------------------------
 *
 * TO CHANGE THE VALUE OF A PREFERENCE IN THE 'ARKENFOX' USER.JS OR THE
 * --------------------------------------------------------------------
 * 'ARKENFOX DIFFS' SECTION ABOVE:
 * -------------------------------
 * 1. exit Firefox
 * 2. copy the entire preference line to the CUSTOM CODE section below
 * 3. change the pref value in the CUSTOM CODE section and save your changes
 * 4. run the 'arkenfox' updater script
 *
 * TO RESET/REMOVE A CUSTOM PREFERENCE:
 * ------------------------------------
 * 1. exit Firefox
 * 2. comment out the preference(s) by prefixing it with 2 forward slashes (//)
 *    and save your changes (do not move it to the DEPRECIATED/REMOVED PREFS
 *    section below)
 * 3. run the 'arkenfox' updater script
 * 4. run the 'arkenfox' prefsCleaner script
 *
 * TO FIND THE DEFAULT VALUE OF A PREFERENCE:
 * ------------------------------------------
 * find the preference in about:config and reset it. alternatively, search the
 * Firefox source code: https://searchfox.org/
 */

/*
 * if the value of the "_user.js.parrot" pref in about:config is "syntax error
 * @ CUSTOM PREFERENCES" then there is a syntax error between this point
 * and the very next "_user.js.parrot" troubleshooting pref.
 */
user_pref("_user.js.parrot", "syntax error @ CUSTOM PREFERENCES");
/*
 * ADD YOUR CUSTOM PREFERENCES BELOW THIS LINE
 * -------------------------------------------
 */

user_pref("browser.download.alwaysOpenPanel", true); // whether to open the download dialog for every download
user_pref("browser.formfill.enable", false); // [*PRIV=false] whether to remember search and form history
user_pref("browser.link.open_newwindow", 3); // controls when new window/tab should be opened - 1=open links that open new windows in current tab, 2=open links that open new windows in new window, 3=open links that open new windows in new tab
user_pref("browser.startup.page", 1); // what to load when Firefox starts - 0=a blank page, 1=your home page, 2=the last visited page, 3=restore the previous session - note that the previous session will not be restored if 'privacy.clearOnShutdown.history' is set to 'false'
user_pref("dom.security.https_only_mode_send_http_background_request", false); // [PRIV=false] whether to send HTTP requests to the server to test if it supports HTTPS if the server doesn't respond within 3 seconds
user_pref("privacy.clearOnShutdown.formdata", true); // whether to clear form and search history on shutdown - set to 'true' if sharing Firefox with another user
user_pref("privacy.clearOnShutdown.history", true); // whether to clear history on shutdown - set to 'true' if sharing Firefox with another user
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", true); // whether to clear history and form data on shutdown - set to 'true' if sharing Firefox with another user
user_pref("privacy.cpd.formdata", true); // whether to select the 'Form & search history' item for deletion when clearing history
user_pref("privacy.cpd.offlineApps", true); // whether to select the 'Offline website data' item for deletion when clearing history
user_pref("privacy.userContext.enabled", true); // whether to enable containers - containers are not strictly necessary with ETP set to "strict"
user_pref("security.cert_pinning.enforcement_level", 1); // [PRIV=0] [*SAFE=(1 or 2)] whether Firefox can check which certificate authorities issued SSL certificates for the site - 0=disabled 1=allow user MiTM (such as your antivirus), 2=strict - 2 may cause key pinning (HPKP) errors; MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE
user_pref("security.OCSP.enabled", 1); // [PRIV=0] [*SAFE=1] when to use OCSP fetching to confirm validity of certificates - 0=disabled, 1=enabled, 2=enabled for EV certificates only - you should typically NOT disable this
user_pref("security.ssl.require_safe_negotiation", false); // [UNBREAK=false] [*PRIV=true] whether to allow connections to servers that don't support SSL
user_pref("security.tls.version.enable-deprecated", true); // [UNBREAK=true] [*SAFE=false] whether to enable the use of older TLS versions
user_pref("signon.formlessCapture.enabled", false); // [*SAFE=false] whether password manager can capture login credentials when a proper login form is not detected

// Load new tabs in background
user_pref("browser.tabs.loadBookmarksInBackground", true);

/*
 * misc. personal preferences
 */
user_pref("accessibility.tabfocus", 3); // which elements can be focused using the Tab key - 1=text fields, 2=all form fields except text, 4=links ony (values can be added together)
user_pref("accessibility.typeaheadfind.enablesound", false); // whether to enable a sound notofication if no search terms are present when using the Find bar - also controls whether the screen flashes
user_pref("app.update.auto", false); // whether to disable auto app updates (non-Windows)
user_pref("app.update.staging.enabled", false); // [SET] [UNBREAK=true] whether to enable Firefox update staging - *TODO* - better description
user_pref("browser.bookmarks.editDialog.maxRecentFolders", 12); // how many recent folders to display when adding a bookmark
user_pref("browser.cache.memory.enable", true); // [SET] [SAFE=true] whether to enable memory cache
user_pref("browser.contentblocking.report.lockwise.enabled", false); // [SET] [SAFE=true] [*PRIV=false] whether to enable Lockwise reporting of sites visited to check if they've been breached
user_pref("browser.contentblocking.report.monitor.enabled", false); // [SET] [UNBREAK=true] *TODO* unsure - assumed to affect reporting of blocked content
user_pref("browser.download.autohideButton", true); // whether to auto-hide the Downloads button
user_pref("browser.download.folderList", 1); // where to save downloaded files - 0=desktop 1=downloads 2=last used
user_pref("browser.download.forbid_open_with", false); // whether to allow the `open with` option when downloading a file
user_pref("browser.download.open_pdf_attachments_inline", true); // by default Firefox will automatically download some PDF files to disk before opening them - setting this pref to 'true' will avoid downloading the file
user_pref("browser.link.open_newwindow.override.external", 3); // open links from external programs in: 1=the current tab, 2=a new window, 3=a new tab
user_pref("browser.menu.showViewImageInfo", true); // whether to enable the context menu item to view image information
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // whether to view content from the Pocket extension (this pref is probably redundant)
user_pref("browser.pagethumbnails.capturing_disabled", false); // whether to capture page thumbnails
user_pref("browser.partnerlink.attributionURL", ""); // ??? TODO
user_pref("browser.partnerlink.campaign.topsites", ""); // ??? TODO
user_pref("browser.safebrowsing.allowOverride", true); // [SET] [SAFE=false] whether to provide a means to override Safe Browsing warnings
user_pref("browser.safebrowsing.blockedURIs.enabled", false); // [SET] [SAFE=true] whether to use Mozilla's blocklist for known Flash tracking/fingerprinting - can set to 'false' if using uBlock with appropriate lists enabled
user_pref("browser.safebrowsing.downloads.enabled", false); // [SET] [SAFE=true] whether to enable 'Safe Browsing', downloads (list of sites provided by Google) - can set to 'false' if using uBlock with appropriate lists enabled
user_pref("browser.safebrowsing.malware.enabled", false); // [SET] [SAFE=true] whether to enable 'Safe Browsing', malware (list of sites provided by Google) - can set to 'false' if using uBlock with appropriate lists enabled
user_pref("browser.safebrowsing.phishing.enabled", false); // [SET] [SAFE=true] whether to enable 'Safe Browsing', phishing (list of sites provided by Google) - can set to 'false' if using uBlock with appropriate lists enabled
user_pref("browser.search.update", true); // [SET] whether to enable automatic updates for search engine plugins (e.g. OpenSearch)
user_pref("browser.search.widget.inNavBar", true); // [SET] whether to show the search bar on the navigation bar
user_pref("browser.sessionstore.cleanup.forget_closed_after", 600); // time in seconds after which Firefox 'forgets' about closed tabs
user_pref("browser.sessionstore.interval", 9999999); // [UNBREAK=(default value)] interval in seconds at which session data is stored (restore session after browser crash) - '9999999' essentially disables session store to reduce disk writes - previous opened tabs will still be restored on startup (see also: 'browser.startup.page')
user_pref("browser.sessionstore.interval.idle", 9999999); // [UNBREAK=(default value)] interval in seconds at which session data is stored when browser is idle (restore session after browser crash) - '9999999' essentially disables session store to reduce disk writes - previous opened tabs will still be restored on startup
user_pref("browser.sessionstore.max_tabs_undo", 4); // how many tabs that can be restored when restarting the browser if session restore is enabled, as well as how many closed tabs can be re-opened while browsing
user_pref("browser.tabs.allowTabDetach", true); // whether to enable the ability to 'detach' a tab by dragging it downward and having it open in a new window
user_pref("browser.tabs.closeWindowWithLastTab", false); // whether to close the browser when the last tab is closed
user_pref("browser.tabs.firefox-view", true); // whether to enable Firefox View (sync tabs across devices)
user_pref("browser.tabs.loadDivertedInBackground", true); // whether to keep Firefox in the background when loading a link from an external application
user_pref("browser.tabs.loadInBackground", true); // whether to focus new tabs opened from a link
user_pref("browser.tabs.warnOnCloseOtherTabs", true); // whether you want to be bugged when you close multiple tabs other than the one from which the option was invoked
user_pref("browser.tabs.warnOnOpen", true); // whether to warn when too many tabs are opened
user_pref("browser.triple_click_selects_paragraph", true); // whether to select paragraphs on triple click
user_pref("browser.urlbar.autoFill", false); // whether to allow auto-complete of text entered in the address bar
user_pref("browser.urlbar.formatting.enabled", true); // whether to highlight the base domain by dimming the rest of the URL
user_pref("browser.urlbar.quicksuggest.remoteSettings.enabled", false); // ? TODO
user_pref("browser.urlbar.quicksuggest.scenario", "offline"); // mode in which quick suggest operates
user_pref("browser.urlbar.quicksuggest.shouldShowOnboardingDialog", false); // ? TODO
user_pref("browser.urlbar.maxRichResults", 20); // max number of results shown in the address bar drop-down menu
user_pref("browser.urlbar.suggest.engines", false); // whether to suggest search engines when focusing the address bar
user_pref("browser.urlbar.suggest.openpage", false); // whether to suggest currently open pages when entering text in the address bar
user_pref("browser.urlbar.suggest.topsites", false); // whether to suggest top sites when editing the address bar
user_pref("browser.urlbar.trimURLs", false); // whether to hide parts of a URL in the address bar, such as 'http://' and 'www.'
user_pref("browser.urlbar.update2.engineAliasRefresh", true); // whether to enable the "Add" button to manually add a serch engine at about:preferences#search
user_pref("devtools.aboutdebugging.showSystemAddons", true); // whether to show system add-ons in about:debugging
user_pref("devtools.toolbox.zoomValue", "1.3"); // size of text in the developer toolbox
user_pref("dom.block_download_insecure", false); // [SET] [*SAFE=true] [PRIV=true] whether to block downloads served over a non-secure protocol, such as HTTP
user_pref("dom.push.connection.enabled", false); // [UNBREAK=true] [*PRIV=false] push notifications connection
user_pref("extensions.pocket.enabled", false); // [SET] [*PRIV=false] set to 'true' if you use the Pocket service, a "save for later" cloud service
user_pref("extensions.systemAddon.update.enabled", false); // [SET] whether to check for updates to system add-ons - this should be disabled only if you delete all system add-ons which i personally do because Mozilla has abused user trust in the past with these add-ons
user_pref("extensions.update.autoUpdateDefault", false); // [SET] [*PRIV=false] whether to allow automatic installation of updated add-ons - i HIGHLY recommend setting this to 'false' and reading all change logs, privacy policies, etc., before installing add-on updates
user_pref("extensions.update.enabled", true); // [SET] [*SAFE=true] [UNBREAK=true] whether to enable automatic checking (not installation) for extension updates - it is fine to enable this, just don't enable automatic installation of add-on updates
user_pref("extensions.webextensions.restrictedDomains", ""); // [*UNBREAK=(default value)] [PRIV=""] a list of domains where WebExtensions (add-ons) are not allowed to run
user_pref("extensions.webextensions.userScripts.enabled", true); // whether to enable the WebExtension API for user scripts (see: https://wiki.mozilla.org/WebExtensions/UserScripts)
user_pref("findbar.highlightAll", true); // whether to highlight all instances of search terms entered in the Find Bar
user_pref("font.name.serif.x-unicode", "Bitstream Vera Sans"); // font preference
user_pref("font.name.serif.x-western", "Bitstream Vera Sans"); // font preference
user_pref("full-screen-api.warning.delay", 0); // how long wait before displaying full screen warning
user_pref("full-screen-api.warning.timeout", 0); // how long to display a warning when a page enters full-screen mode
user_pref("identity.fxaccounts.enabled", false); // [SET] [UNBREAK=true] [*PRIV=false] whether to enable Firefox Accounts and Sync - if you want to sync browser data between devices, consider using an open source, self-hosted solution
user_pref("image.animation_mode", "once"); // how to display animated GIF images - none=do not animate, once=play animation once, normal=play the animation normally
user_pref("layout.css.scrollbar-color.enabled", false); // whether to allow web pages to style scroll bars
user_pref("layout.css.scrollbar-width.enabled", false); // whether to allow web pages to style scroll bars
user_pref("layout.spellcheckDefault", 2); // what to spell-check - 0=disabled, 1=enable for multi-line text controls, 2=enable for single and multi-line text controls
user_pref("mathml.disabled", true); // [UNBREAK=false] [*PRIV=true] mathematical markup language - suggested to disable because of security concerns
user_pref("media.autoplay.blocking_policy", 2); // [SET] when to auto-play audio/video content - 0=sticky, 1=transient, 2=click to play - see: https://wiki.mozilla.org/Media/block-autoplay
user_pref("media.autoplay.default", 5); // [SET] media playback - 0=allow all, 1=block non-muted, 2=prompt (removed in FF66), 5=block all (FF69+)
user_pref("media.getusermedia.aec_enabled", false); // microphone echo cancellation
user_pref("media.getusermedia.agc_enabled", false); // microphone automatic gain control
user_pref("media.getusermedia.hpf_enabled", false); // microphone highpass filter
user_pref("media.getusermedia.noise_enabled", false); // microphone noise supression
user_pref("mousewheel.with_shift.action", 0); // what to do when Shift key is used with the mouse wheel - 0=do nothing, 1=scroll contents, 2=go back or forward in history, 3=zoom contents in or out
user_pref("network.manage-offline-status", false); // whether to auto-enter work off-line mode if network drops
user_pref("network.trr.mode", 5); // [SET] [UNBREAK=(default value)] whether to enable Trusted Recursive Resolver (DNS over HTTPS) - 0=standard mode, 1=let Firefox choose fastest method, 2=encrypted DNS with unencrypted fallback, 3=encrypted DNS only, 4=for testing, 5=essentially same as '0' - it is strongly suggested to encrypt DNS lookups by setting this to 2 or 3 unless you are encrypting DNS another way such as a VPN which offers DNS - IMPORTANT! enabling this alone does not provide DNS encryption, see: https://tinyurl.com/ycp3cbbp
user_pref("nglayout.enable_drag_images", false); // whether to allow image dragging - also seems to have an effect on highlighting and dragging text - this feature can be very annoying
user_pref("privacy.antitracking.enableWebcompat", false); // [SET] [UNBREAK=true] whether to enable Web Compatibility/SmartBlock - enabling this will, for example, allow 3rd party cookies for some websites where they are deemed necessary, such as for log-on purposes (Facebook, etc.)
user_pref("reader.parse-on-load.enabled", false); // whether to create the Reader View version of page when page is first loaded
user_pref("security.mixed_content.block_display_content", false); // [SET] [*SAFE=true] [UNBREAK=false] whether to block media elements loaded over HTTP on HTTPS pages
user_pref("security.mixed_content.upgrade_display_content", false); // [SET] [*SAFE=true] [UNBREAK=false] whether to upgrade media elements loaded over HTTP on HTTPS pages
user_pref("signon.firefoxRelay.feature", "disabled"); // whether to enable Firefox Relay (an email relay)
user_pref("signon.generation.enabled", false); // [*SAFE=true] whether to suggest and generate strong passwords
user_pref("spellchecker.dictionary_path", "/usr/lib/aspell"); // [SET] path to spell checker dictionary (default on Linux seems to be /usr/lib/hunspell)
user_pref("startup.homepage_override_url", ""); // [PRIV=""] 'What's New' page after browser update
user_pref("startup.homepage_welcome_url", ""); // [PRIV=""] 'Welcome' URL
user_pref("startup.homepage_welcome_url.additional", ""); // [PRIV=""] 'Welcome' URL, additional
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // (ff 69+) whether to allow styling chrome with userChrome.css
user_pref("ui.caretWidth", 2); // width of the blinking caret in edit controls
user_pref("ui.popup.disable_autohide", false); // (for developers) useful if you forget to disable 'Disable Popup Auto-Hide' option in Browser Toolbox
user_pref("view_source.wrap_long_lines", true); // whether to wrap long lines when viewing page source
user_pref("widget.disable-dark-scrollbar", true); // whether to disable dynamically colored scroll bars
user_pref("widget.gtk.hide-pointer-while-typing.enabled", false); // whether to hide the cursor when entering text into an input field
user_pref("widget.gtk.ignore-bogus-leave-notify", 1); // [SET] try setting this to '1' if experiencing issues with drop-down menus disappearing before the click is registered
user_pref("widget.gtk.theme-scrollbar-colors.enabled", false); // presumably whether to apply system style to scroll bars

/*
 * [SET] the following preferences enable and fine-tune Firefox's smooth
 * scrolling feature when using a mouse wheel or keyboard keys to scroll.
 */
user_pref("general.smoothScroll.lines.durationMaxMS", 400); // smooth the start/end of line scrolling operations in ms (up/down arrow/page keys)
user_pref("general.smoothScroll.lines.durationMinMS", 200); // smooth the start/end of line scrolling operations in ms (up/down arrow/page keys)
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 600); // smooth the start/end of scrolling operations in ms
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 300); // smooth the start/end of scrolling operations in ms
user_pref("general.smoothScroll.other.durationMaxMS", 400); // smooth the start/end of other scrolling operations in ms
user_pref("general.smoothScroll.other.durationMinMS", 200); // smooth the start/end of other scrolling operations in ms
user_pref("general.smoothScroll.pages.durationMaxMS", 400); // smooth the start/end of page scrolling operations in ms (PgUp/PgDn keys)
user_pref("general.smoothScroll.pages.durationMinMS", 200); // smooth the start/end of page scrolling operations in ms (PgUp/PgDn keys)
user_pref("mousewheel.acceleration.factor", 10); // sets acceleration factor if mouse wheel.acceleration.start > -1
user_pref("mousewheel.acceleration.start", 0); // when to apply mouse wheel.acceleration.factor (after how many scroll clicks of mouse wheel) - value must be greater than -1
user_pref("mousewheel.default.delta_multiplier_x", 85); // sets the x-axis step size
user_pref("mousewheel.default.delta_multiplier_y", 85); // sets the y-axis step size
user_pref("mousewheel.default.delta_multiplier_z", 85); // sets the z-axis step size
user_pref("mousewheel.min_line_scroll_amount", 10); // if the CSS line height is smaller than this value in pixels, each scroll click will scroll this amount

/**
 * [SET] allow an extension to access local files
 * these are personal prefs for a specific extension - you will want to comment these out and run the arkenfox prefsCleaner script
 */
user_pref("capability.policy.localfilelinks.checkloaduri.enabled", "allAccess");
user_pref(
  "capability.policy.localfilelinks.sites",
  "moz-extension://fc2c0f71-1a48-40b9-9f25-f3954f95f53b/newTab/newTab.html",
);
user_pref("capability.policy.policynames", "localfilelinks");

/*
 * -------------------------------------------
 * ADD YOUR CUSTOM PREFERENCES ABOVE THIS LINE
 */

/*
 * DEPRECIATED - DO NOT EDIT
 * prefs here are reset to default values by the prefsCleaner script.
 */
//user_pref("browser.cache.memory.capacity", 10240);
//user_pref("browser.display.use_document_fonts", 0);
//user_pref("browser.search.separatePrivateDefault", false);
//user_pref("browser.search.separatePrivateDefault.ui.enabled", false);
//user_pref("clipboard.autocopy", false);
//user_pref("dom.element.popover.enabled", false);
//user_pref("dom.event.contextmenu.shift_suppresses_event", false);
//user_pref("dom.push.enabled", false);
//user_pref("dom.push.userAgentID", "");
//user_pref("dom.webnotifications.enabled", false);
//user_pref("dom.webnotifications.serviceworker.enabled", false);
//user_pref("extensions.systemAddon.update.url", "");
//user_pref("keyword.enabled", false);
//user_pref("layout.CSS.supports-rule.enabled", false);
//user_pref("media.eme.enabled", false);
//user_pref("media.play-stand-alone", false);
//user_pref("network.dns.disableIPv6", true);
//user_pref("network.http.referer.XOriginPolicy", 2);
//user_pref("network.protocol-handler.external.ms-windows-store", false);
//user_pref("privacy.resistFingerprinting.letterboxing", false);
//user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", false);
//user_pref("privacy.userContext.ui.enabled", false);
//user_pref("security.osclientcerts.autoload", true);
//user_pref("security.pki.sha1_enforcement_level", 0);
//user_pref("signon.management.page.breach-alerts.enabled", false);

/*
 *  !!! IMPORTANT !!!  !!! IMPORTANT !!!  !!! IMPORTANT !!!  !!! IMPORTANT !!!
 *  --------------------------------------------------------------------------
 *
 * below is the "_user.js.parrot" preference you must check in about:config. if
 * the value is "SUCCESS! USER-OVERRIDES SETTINGS LOADED" then there was no
 * syntax error above this point.
 */
user_pref(
  "_user.js.parrot",
  "SUCCESS! 12BYTES.ORG USER-OVERRIDES SETTINGS LOADED",
); // troubleshooting pref - do not edit
