/**
 * GenerateClubsListingFromTI.js
 * Author: Chenggang Tang(OItisTang@gmail.com)
 *
 * Open https://www.toastmasters.org/ with browser(prefer Google Chrome),
 * Then open developer console,
 * Paste all content of this file into that console, then enter.
 * Wait about 2-3 minutes.
 * An XML file will be ready to download and save.
 * Make sure Directory and SpotFinder themes from templatic.com are installed in Wordpress.
 * At the Tool->Import menu, choose Wordpress.
 * Upload the generated XML file.
 */

/**
 * return Listing XML Header part
 */
function getXmlHeader() {
    var header = ''
    + '<?xml version="1.0" encoding="UTF-8" ?>\n'
    + '<!-- generated by GenerateClubsListing.js -->\n'
    + '<!-- Chenggang Tang(OItisTang@gmail.com) -->\n'
    + '\n'
    + '<!-- generator="WordPress/4.1" created="2015-01-01 09:58" -->\n'
    + '<rss version="2.0"\n'
    + ' xmlns:excerpt="http://wordpress.org/export/1.2/excerpt/"\n'
    + ' xmlns:content="http://purl.org/rss/1.0/modules/content/"\n'
    + ' xmlns:wfw="http://wellformedweb.org/CommentAPI/"\n'
    + ' xmlns:dc="http://purl.org/dc/elements/1.1/"\n'
    + ' xmlns:wp="http://wordpress.org/export/1.2/"\n'
    + '>\n'
    + '\n'
    + '<channel>\n'
    + ' <title>Toastmasters District 85</title>\n'
    + ' <link>http://d85toastmasters.org</link>\n'
    + ' <description>Where leaders are made!</description>\n'
    + ' <pubDate>Thu, 01 Jan 2015 09:58:27 +0000</pubDate>\n'
    + ' <language>zh-CN</language>\n'
    + ' <wp:wxr_version>1.2</wp:wxr_version>\n'
    + ' <wp:base_site_url>http://d85toastmasters.org</wp:base_site_url>\n'
    + ' <wp:base_blog_url>http://d85toastmasters.org</wp:base_blog_url>\n'
    + '\n'
    + ' <wp:author><wp:author_id>1</wp:author_id><wp:author_login>admin</wp:author_login><wp:author_email>chinatoastmasters@163.com</wp:author_email><wp:author_display_name><![CDATA[admin]]></wp:author_display_name><wp:author_first_name><![CDATA[]]></wp:author_first_name><wp:author_last_name><![CDATA[]]></wp:author_last_name></wp:author>\n'
    + '\n'
    + '\n'
    + ' <generator>http://wordpress.org/?v=4.1</generator>\n'
    + '\n';

    return header;
}

/**
 * return Listing XML Footer part
 */
function getXmlFooter() {
    var footer = ''
    + '\n'
    + '</channel>\n'
    + '</rss>\n';

    return footer;
}

/**
 * Debug version: generate Listing XML item from given parameters
 */
function getXmlItemDebug(
    title, city, clubNameDashed, fakeId, content,
    excerpt, tags, cityId, stateId,
    specialOffers, googlePlus, facebook, twitter, website,
    email, phone, time, longitude, address, latitude) {
    var elementString = ''
    + 'title: ' + title + '\n'
    + 'city: ' + city + '\n'
    + 'clubNameDashed: ' + clubNameDashed + '\n'
    + 'fakeId: ' + fakeId + '\n'
    + 'content: ' + content + '\n'
    + 'excerpt: ' + excerpt + '\n'
    + 'tags: ' + tags + '\n'
    + 'cityId: ' + cityId + '\n'
    + 'stateId: ' + stateId + '\n'
    + 'specialOffers: ' + specialOffers + '\n'
    + 'googlePlus: ' + googlePlus + '\n'
    + 'facebook: ' + facebook + '\n'
    + 'twitter: ' + twitter + '\n'
    + 'website: ' + website + '\n'
    + 'email: ' + email + '\n'
    + 'phone: ' + phone + '\n'
    + 'time: ' + time + '\n'
    + 'longitude: ' + longitude + '\n'
    + 'address: ' + address + '\n'
    + 'latitude: ' + latitude + '\n'
    + '------------------------\n';

    return elementString;
}

/**
 * generate Listing XML item from given parameters
 */
function getXmlItem(
    title, city, clubNameDashed, fakeId, content,
    excerpt, tags, cityId, stateId,
    specialOffers, googlePlus, facebook, twitter, website,
    email, phone, time, longitude, address, latitude) {
    var elementString = ''
    + ' <item>\n'
    + '     <title>' + title + '</title>\n'
    + '     <link>http://d85toastmasters.org/city/' + city.replace('\'', '').toLowerCase() + '/club/' + clubNameDashed + '/</link>\n'
    + '     <pubDate>Thu, 01 Jan 2015 05:36:08 +0000</pubDate>\n'
    + '     <dc:creator><![CDATA[admin]]></dc:creator>\n'
    + '     <guid isPermaLink="false">http://d85toastmasters.org/?post_type=listing&#038;p=' + fakeId + '</guid>\n'
    + '     <description></description>\n'
    + '     <content:encoded><![CDATA[' + content + ']]></content:encoded>\n'
    + '     <excerpt:encoded><![CDATA[' + excerpt + ']]></excerpt:encoded>\n'
    + '     <wp:post_id>' + fakeId + '</wp:post_id>\n'
    + '     <wp:post_date>2015-01-01 13:36:08</wp:post_date>\n'
    + '     <wp:post_date_gmt>2015-01-01 05:36:08</wp:post_date_gmt>\n'
    + '     <wp:comment_status>open</wp:comment_status>\n'
    + '     <wp:ping_status>open</wp:ping_status>\n'
    + '     <wp:post_name>' + clubNameDashed + '</wp:post_name>\n'
    + '     <wp:status>publish</wp:status>\n'
    + '     <wp:post_parent>0</wp:post_parent>\n'
    + '     <wp:menu_order>0</wp:menu_order>\n'
    + '     <wp:post_type>listing</wp:post_type>\n'
    + '     <wp:post_password></wp:post_password>\n'
    + '     <wp:is_sticky>0</wp:is_sticky>\n'
    + '     <category domain="listingcategory" nicename="club"><![CDATA[Club]]></category>\n';
    
    for (var index in tags) {
    	elementString += '     <category domain="listingcategory" nicename="'
    					+ tags[index].toLowerCase()
    					+ '"><![CDATA['
    					+ tags[index]
    					+ ']]></category>\n';
    }
    
    elementString += ''
    + '     <wp:postmeta>\n'
    + '         <wp:meta_key>_thumbnail_id</wp:meta_key>\n'
    + '         <wp:meta_value><![CDATA[2262]]></wp:meta_value>\n'
    + '     </wp:postmeta>\n'
    + '     <wp:postmeta>\n'
    + '         <wp:meta_key>listing_logo</wp:meta_key>\n'
    + '         <wp:meta_value><![CDATA[http://d85toastmasters.org/wp-content/uploads/2015/01/ToastmastersLogoColor.jpg]]></wp:meta_value>\n'
    + '     </wp:postmeta>\n'
    + '     <wp:postmeta>\n'
    + '         <wp:meta_key>daily_date</wp:meta_key>\n'
    + '         <wp:meta_value><![CDATA[2015-01-01]]></wp:meta_value>\n'
    + '     </wp:postmeta>\n'
    + '     <wp:postmeta>\n'
    + '         <wp:meta_key>viewed_count</wp:meta_key>\n'
    + '         <wp:meta_value><![CDATA[3]]></wp:meta_value>\n'
    + '     </wp:postmeta>\n'
    + '     <wp:postmeta>\n'
    + '         <wp:meta_key>viewed_count_daily</wp:meta_key>\n'
    + '         <wp:meta_value><![CDATA[3]]></wp:meta_value>\n'
    + '     </wp:postmeta>\n'
    + '     <wp:postmeta>\n'
    + '         <wp:meta_key>post_city_id</wp:meta_key>\n'
    + '         <wp:meta_value><![CDATA[' + cityId + ']]></wp:meta_value>\n'
    + '     </wp:postmeta>\n'
    + '     <wp:postmeta>\n'
    + '         <wp:meta_key>zones_id</wp:meta_key>\n'
    + '         <wp:meta_value><![CDATA[' + stateId + ']]></wp:meta_value>\n'
    + '     </wp:postmeta>\n'
    + '     <wp:postmeta>\n'
    + '         <wp:meta_key>country_id</wp:meta_key>\n'
    + '         <wp:meta_value><![CDATA[44]]></wp:meta_value>\n'
    + '     </wp:postmeta>\n'
    + '     <wp:postmeta>\n'
    + '         <wp:meta_key>featured_c</wp:meta_key>\n'
    + '         <wp:meta_value><![CDATA[n]]></wp:meta_value>\n'
    + '     </wp:postmeta>\n'
    + '     <wp:postmeta>\n'
    + '         <wp:meta_key>featured_h</wp:meta_key>\n'
    + '         <wp:meta_value><![CDATA[n]]></wp:meta_value>\n'
    + '     </wp:postmeta>\n'
    + '     <wp:postmeta>\n'
    + '         <wp:meta_key>featured_type</wp:meta_key>\n'
    + '         <wp:meta_value><![CDATA[none]]></wp:meta_value>\n'
    + '     </wp:postmeta>\n'
    + '     <wp:postmeta>\n'
    + '         <wp:meta_key>proprty_feature</wp:meta_key>\n'
    + '         <wp:meta_value><![CDATA[<p>' + specialOffers + '</p>]]></wp:meta_value>\n'
    + '     </wp:postmeta>\n'
    + '     <wp:postmeta>\n'
    + '         <wp:meta_key>google_plus</wp:meta_key>\n'
    + '         <wp:meta_value><![CDATA[' + googlePlus + ']]></wp:meta_value>\n'
    + '     </wp:postmeta>\n'
    + '     <wp:postmeta>\n'
    + '         <wp:meta_key>facebook</wp:meta_key>\n'
    + '         <wp:meta_value><![CDATA[' + facebook + ']]></wp:meta_value>\n'
    + '     </wp:postmeta>\n'
    + '     <wp:postmeta>\n'
    + '         <wp:meta_key>twitter</wp:meta_key>\n'
    + '         <wp:meta_value><![CDATA[' + twitter + ']]></wp:meta_value>\n'
    + '     </wp:postmeta>\n'
    + '     <wp:postmeta>\n'
    + '         <wp:meta_key>website</wp:meta_key>\n'
    + '         <wp:meta_value><![CDATA[' + website + ']]></wp:meta_value>\n'
    + '     </wp:postmeta>\n'
    + '     <wp:postmeta>\n'
    + '         <wp:meta_key>email</wp:meta_key>\n'
    + '         <wp:meta_value><![CDATA[' + email + ']]></wp:meta_value>\n'
    + '     </wp:postmeta>\n'
    + '     <wp:postmeta>\n'
    + '         <wp:meta_key>phone</wp:meta_key>\n'
    + '         <wp:meta_value><![CDATA[' + phone + ']]></wp:meta_value>\n'
    + '     </wp:postmeta>\n'
    + '     <wp:postmeta>\n'
    + '         <wp:meta_key>listing_timing</wp:meta_key>\n'
    + '         <wp:meta_value><![CDATA[' + time + ']]></wp:meta_value>\n'
    + '     </wp:postmeta>\n'
    + '     <wp:postmeta>\n'
    + '         <wp:meta_key>map_view</wp:meta_key>\n'
    + '         <wp:meta_value><![CDATA[Road Map]]></wp:meta_value>\n'
    + '     </wp:postmeta>\n'
    + '     <wp:postmeta>\n'
    + '         <wp:meta_key>geo_longitude</wp:meta_key>\n'
    + '         <wp:meta_value><![CDATA[' + longitude + ']]></wp:meta_value>\n'
    + '     </wp:postmeta>\n'
    + '     <wp:postmeta>\n'
    + '         <wp:meta_key>_edit_last</wp:meta_key>\n'
    + '         <wp:meta_value><![CDATA[1]]></wp:meta_value>\n'
    + '     </wp:postmeta>\n'
    + '     <wp:postmeta>\n'
    + '         <wp:meta_key>zooming_factor</wp:meta_key>\n'
    + '         <wp:meta_value><![CDATA[12]]></wp:meta_value>\n'
    + '     </wp:postmeta>\n'
    + '     <wp:postmeta>\n'
    + '         <wp:meta_key>address</wp:meta_key>\n'
    + '         <wp:meta_value><![CDATA[' + address + ']]></wp:meta_value>\n'
    + '     </wp:postmeta>\n'
    + '     <wp:postmeta>\n'
    + '         <wp:meta_key>geo_latitude</wp:meta_key>\n'
    + '         <wp:meta_value><![CDATA[' + latitude + ']]></wp:meta_value>\n'
    + '     </wp:postmeta>\n'
    + ' </item>\n';

    return elementString;
}

/**
 * Hardcoded city_id and state_id
 * How to get those data:
 * 1. create cities in SpotFinder
 * 2. create a listing for each city
 * 3. export all listing
 *
 * return value format:
 * 'city_id:state_id'
 */
function getCityStateId(city) {
    var cityStateIdArray = {};
    cityStateIdArray['Beijing'] = '4:658';
    cityStateIdArray['Changsha'] = '5:671';
    cityStateIdArray['Changshu'] = '7:673';
    cityStateIdArray['Dalian'] = '8:676';
    cityStateIdArray['Hangzhou'] = '9:687';
    cityStateIdArray['Harbin'] = '10:667';
    cityStateIdArray['Jinan'] = '11:680';
    cityStateIdArray['Kunshan'] = '12:673';
    cityStateIdArray['Lianyungang'] = '13:673';
    cityStateIdArray['Nanjing'] = '14:673';
    cityStateIdArray['Nantong'] = '15:673';
    cityStateIdArray['Ningbo'] = '16:687';
    cityStateIdArray['Qingdao'] = '17:680';
    cityStateIdArray['Shanghai'] = '18:681';
    cityStateIdArray['Shenyang'] = '19:676';
    cityStateIdArray['Shijiazhuang'] = '20:666';
    cityStateIdArray['Suzhou'] = '21:673';
    cityStateIdArray['Tianjin'] = '22:684';
    cityStateIdArray['Wenzhou'] = '23:687';
    cityStateIdArray['Wuhan'] = '24:670';
    cityStateIdArray['Wuxi'] = '25:673';
    cityStateIdArray['Xi\'an'] = '26:679';
    cityStateIdArray['Zhangjiagang'] = '27:673';
    cityStateIdArray['Zhengzhou'] = '28:668';

    return cityStateIdArray[city];
}

/**
 * Fake post id
 */
var FakePostId = 3000;

/**
 * fill parameters from a club object
 * then generate Listing XML item
 */
function getXmlItemFromClub(club) {
    var title = '';
    var city = '';
    var clubNameDashed = '';
    var fakeId = ''; // increment from 3000
    var content = '';
    var excerpt = '';
    var tags = [];
    var cityId = '';
    var stateId = '';
    var specialOffers = '';
    var googlePlus = '';
    var facebook = '';
    var twitter = '';
    var website = '';
    var email = '';
    var phone = '';
    var time = '';
    var longitude = '';
    var address = '';
    var latitude = '';

    // for those not in regular format
    if (club.City == 'Xi\'An') {
        club.City = 'Xi\'an';
    }
    if (club.City == 'Wen Zhou') {
        club.City = 'Wenzhou';
    }
    if (club.City == 'Suzhou City') {
        club.City = 'Suzhou';
    }
    if (club.City == '') {
        club.City = 'Shanghai';
    }

    cityStateId = getCityStateId(club.City);

    // 1
    title = club.ClubName;

    // 2
    city = club.City;
    if (cityStateId == undefined) {
        city = 'ERROR(' + club.City + ')';
    }

    // 3
    var arr = club.Url.split('/');
    clubNameDashed = arr[arr.length - 1];

    // 4
    fakeId = FakePostId++;

    // 5
    content = ''
    + 'Club Number: ' + club.ClubNumber + '\n'
    + 'Area: ' + club.Division + club.Area + '\n'
    + 'Charter Date: ' + club.EstablishedDate.split('T')[0] + '\n'
    + 'Zip: ' + club.Zip;
    
    if (club.AdditionalInformation != '') {
        console.log('AdditionalInformation: ' + club.AdditionalInformation);
    }
    if (club.Description != '') {
        console.log('Description: ' + club.Description);
    }
    if (club.Text != '') {
        console.log('Text: ' + club.Text);
    }

    // 6
    excerpt = club.ClubName + '; ' + club.MeetingTime + '; ' + club.MeetingDays;

    // 7
    if (club.ClubCode.DisplayName == 'Restricted') {
    	tags.push("Restricted");
    }
    if (club.Advanced) {
    	tags.push("Advanced");
    }
    
    var weekdayShort = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    var weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var meetingDays = club.MeetingDays.toLowerCase();
    
    for (var i = 0; i < 7; ++i) {
    	if (meetingDays.indexOf(weekdayShort[i]) != -1) {
    		tags.push(weekday[i]);
    	}
    }

    // 8
    if (cityStateId == undefined) {
        cityId = 'ERROR';
    } else {
        cityId = cityStateId.split(':')[0];
    }

    // 9
    if (cityStateId == undefined) {
        stateId = 'ERROR';
    } else {
        stateId = cityStateId.split(':')[1];
    }

    // 10
    specialOffers = '';

    // 11
    googlePlus = '';

    // 12
    facebook = club.FacebookURL == null ? '' : club.FacebookURL.Url;

    // 13
    twitter = club.TwitterURL == null ? '' : club.TwitterURL.Url;

    // 14
    if (club.ClubLink) {
        website = club.ClubLink.Url;
    } else {
        website = '';
    }

    // 15
    email = club.Email;

    // 16
    phone = club.Phone;

    // 17
    time = club.MeetingTime + '; ' + club.MeetingDays;

    // 18
    longitude = club.Longitude;

    // 19
    address = club.Address1;
    if (club.Address2 != '' && club.Address2 != '(empty)') {
        address += '; ' + club.Address2;
    }
    if (club.Address3 != '' && club.Address3 != '(empty)') {
        address += '; ' + club.Address3;
    }

    // 20
    latitude = club.Latitude;

    //return getXmlItemDebug(
    return getXmlItem(
        title, city, clubNameDashed, fakeId, content,
        excerpt, tags, cityId, stateId,
        specialOffers, googlePlus, facebook, twitter, website,
        email, phone, time, longitude, address, latitude);
}

/**
 * Generate a file to download
 */
 function stringToFileForDownloading(filename, text) {
  var pom = document.createElement('a');
  pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  pom.setAttribute('download', filename);
  pom.click();
}

/**
 * Generate Listing XML that can be imported into SpotFinder powered Wordpress site
 */
function clubDataToListingXml(data) {
    var clubs = data.Clubs;
    var result = '';

    console.log('Processing ...');

    result += getXmlHeader();

    for (var i=0; i < clubs.length; ++i) {
        var club = clubs[i];
        result += getXmlItemFromClub(club);
    }

    result += getXmlFooter();

    stringToFileForDownloading('AllClubsOfD85.Listings.SpotFinder.Wordpress.xml', result);

    console.log('Generated XML file for importing to SpotFinder powered wordpress site. Byebye!');
}

/**
 * Modified from SearchClubs() function from www.toastmasters.org/Scripts/ClubScripts.js
 */
function MySearchClubs(latitude, longitude, filter, resultParameters) {
    filter.AroundLocation.Latitude = latitude;
    filter.AroundLocation.Longitude = longitude;

    var data = new Object();
    data.Filter = filter;
    data.ResultParameters = resultParameters;

    if (filter.CountryCode == 'USA') {
        data.length = 8000;
        bindFindAClubLocations(data, null, null);
        map.setCenter(SourcePoint);
        map.setZoom(9);
        return;
    }

    $.ajax({
        url: '/api/club/searchclubsunified',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(data),
        success: function (data) {
            if (data != null && data.Clubs != null) {
                console.log('Finding club data success!');
                console.log(data);
                
                // save a copy of JSON data
                //dataJson = JSON.stringify(data);
                //stringToFileForDownloading('AllClubsOfD85.json', dataJson);
                
                // make XML file
                clubDataToListingXml(data);
            }
            else {
                alert('empty');
            }
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}

/**
 * Modified from initializeFindClubMap() function from www.toastmasters.org/Scripts/ClubScripts.js
 */
function MyInitializeFindClubMap(filter, resultParameters) {
    filter = JSON.parse(filter);
    resultParameters = JSON.parse(resultParameters);

    MySearchClubs(0, 0, filter, resultParameters);
}

/* String utility functions */
String.prototype.capitalize = function() { return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }); };
String.prototype.uncapitalize = function() { return this.replace(/(?:^|\s)\S/g, function(a) { return a.toLowerCase(); }); };

/* run our script, remember to set District value to 85 */
MyInitializeFindClubMap('{"AroundLocation":{"Longitude":0,"Latitude":0},"SearchWithin":"","SearchAround":"","Radius":null,"AllowNoLocation":false,"MeetingDaysString":"","MeetingTimeString":"","AllowMeetsInAM":false,"AllowMeetsInPM":false,"ClubName":"","District":"85","CountryCode":null,"Region":"","ClubStatusString":"","AllowOpenClubs":false,"AllowClosedClubs":false,"AllowAdvancedClubs":false,"IsRelative":true,"MeetingDays":[]}', '{"PageNumber":1,"PageSize":400,"MaxPages":0,"IsFeatured":false,"NumberOfDisplayedItems":0,"ResultCount":0,"searchFilter":null}');
