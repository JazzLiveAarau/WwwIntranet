// File: MainIntranet.js
// Date: 2023-05-15
// Author: Gunnar Lidén

// Inhalt
// =============
//
// Main Intranet functions for the web login and logout controls

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Global Parameters /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Instance of the class WebLoginLogout for Intranet.htm
var g_web_login_logout = null;

// Flag telling debug data shall be written to console
var g_write_debug_to_log = true;

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Global Parameters ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Main Functions ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Main (onload) function for the web page Intranet.htm
// 1. Set the array of elements that shall be displayed only after login
// 2. Create the object WebLoginLogout. Call createObjectWebLoginLogout
function initIntranet()
{
    debugToConsole("initIntranet Enter");

    var hide_display_elements = [];
    hide_display_elements[0] = getDivElementIntranetPageContent();

    // Number of directory levels to top directory for directory /www/XML/
    var n_level_xml = 1;

    createObjectWebLoginLogout(hide_display_elements, n_level_xml);

    debugToConsole("initIntranet Exit");

} // initIntranet

// Main (onload) function for the web page /Administration/Documents.htm
// 1. Set the array of elements that shall be displayed only after login
// 2. Create the object WebLoginLogout. Call createObjectWebLoginLogout
function initIntranetDocuments()
{
    debugToConsole("initIntranetDocuments Enter");

    var hide_display_elements = [];
    hide_display_elements[0] = getDivElementIntranetPageContent();

    // Number of directory levels to top directory for directory /www/XML/
    var n_level_xml = 2;

    createObjectWebLoginLogout(hide_display_elements, n_level_xml);

    debugToConsole("initIntranetDocuments Exit");

} // initIntranetDocuments

// Main (onload) function for the web page /Administration/Reservation/Reservation.htm
// 1. Set the array of elements that shall be displayed only after login
// 2. Create the object WebLoginLogout. Call createObjectWebLoginLogout
function initIntranetReservation()
{
    debugToConsole("initIntranetReservation Enter");

    var hide_display_elements = [];
    hide_display_elements[0] = getDivElementIntranetPageContent();

    // Number of directory levels to top directory for directory /www/XML/
    var n_level_xml = 3;

    createObjectWebLoginLogout(hide_display_elements, n_level_xml);

    debugToConsole("initIntranetReservation Exit");

} // initIntranetReservation

// Main (onload) function for the web page /Administration/Flyer/Flyer.htm
// 1. Set the array of elements that shall be displayed only after login
// 2. Create the object WebLoginLogout. Call createObjectWebLoginLogout
function initIntranetFlyer()
{
    debugToConsole("initIntranetFlyer Enter");

    var hide_display_elements = [];
    hide_display_elements[0] = getDivElementIntranetPageContent();

    // Number of directory levels to top directory for directory /www/XML/
    var n_level_xml = 3;

    createObjectWebLoginLogout(hide_display_elements, n_level_xml);

    debugToConsole("initIntranetFlyer Exit");

} // initIntranetFlyer

// Main (onload) function for the web page /Administration/Supporters/Supporters.htm
// 1. Set the array of elements that shall be displayed only after login
// 2. Create the object WebLoginLogout. Call createObjectWebLoginLogout
function initIntranetSupporters()
{
    debugToConsole("initIntranetSupporters Enter");

    var hide_display_elements = [];
    hide_display_elements[0] = getDivElementIntranetPageContent();

    // Number of directory levels to top directory for directory /www/XML/
    var n_level_xml = 3;

    createObjectWebLoginLogout(hide_display_elements, n_level_xml);

    debugToConsole("initIntranetSupporters Exit");

} // initIntranetSupporters

// Main (onload) function for the web page /Administration/Sitzungen/Sitzungen.htm
// 1. Set the array of elements that shall be displayed only after login
// 2. Create the object WebLoginLogout. Call createObjectWebLoginLogout
function initIntranetSitzungen()
{
    debugToConsole("initIntranetSitzungen Enter");

    var hide_display_elements = [];
    hide_display_elements[0] = getDivElementIntranetPageContent();

    // Number of directory levels to top directory for directory /www/XML/
    var n_level_xml = 3;

    createObjectWebLoginLogout(hide_display_elements, n_level_xml);

    debugToConsole("initIntranetSitzungen Exit");

} // initIntranetSitzungen

// Main (onload) function for the web page /Administration/Provider/Provider.htm
// 1. Set the array of elements that shall be displayed only after login
// 2. Create the object WebLoginLogout. Call createObjectWebLoginLogout
function initIntranetProvider()
{
    debugToConsole("initIntranetProvider Enter");

    var hide_display_elements = [];
    hide_display_elements[0] = getDivElementIntranetPageContent();

    // Number of directory levels to top directory for directory /www/XML/
    var n_level_xml = 3;

    createObjectWebLoginLogout(hide_display_elements, n_level_xml);

    debugToConsole("initIntranetProvider Exit");

} // initIntranetProvider

// Main (onload) function for the web page /Administration/Sponsoren/Sponsoren.htm
// 1. Set the array of elements that shall be displayed only after login
// 2. Create the object WebLoginLogout. Call createObjectWebLoginLogout
function initIntranetSponsoren()
{
    debugToConsole("initIntranetSponsoren Enter");

    var hide_display_elements = [];
    hide_display_elements[0] = getDivElementIntranetPageContent();

    // Number of directory levels to top directory for directory /www/XML/
    var n_level_xml = 3;

    createObjectWebLoginLogout(hide_display_elements, n_level_xml);

    debugToConsole("initIntranetSponsoren Exit");

} // initIntranetSponsoren

// Main (onload) function for the web page /Administration/Fotos/Fotos.htm
// 1. Set the array of elements that shall be displayed only after login
// 2. Create the object WebLoginLogout. Call createObjectWebLoginLogout
function initIntranetFotos()
{
    debugToConsole("initIntranetFotos Enter");

    var hide_display_elements = [];
    hide_display_elements[0] = getDivElementIntranetPageContent();

    // Number of directory levels to top directory for directory /www/XML/
    var n_level_xml = 3;

    createObjectWebLoginLogout(hide_display_elements, n_level_xml);

    debugToConsole("initIntranetFotos Exit");

} // initIntranetFotos

// Main (onload) function for the web page /Administration/Musiker/Musiker.htm
// 1. Set the array of elements that shall be displayed only after login
// 2. Create the object WebLoginLogout. Call createObjectWebLoginLogout
function initIntranetMusiker()
{
    debugToConsole("initIntranetMusiker Enter");

    var hide_display_elements = [];
    hide_display_elements[0] = getDivElementIntranetPageContent();

    // Number of directory levels to top directory for directory /www/XML/
    var n_level_xml = 3;

    createObjectWebLoginLogout(hide_display_elements, n_level_xml);

    debugToConsole("initIntranetMusiker Exit");

} // initIntranetMusiker

// Main (onload) function for the web page /Administration/Applikationen/Applikationen.htm
// 1. Set the array of elements that shall be displayed only after login
// 2. Create the object WebLoginLogout. Call createObjectWebLoginLogout
function initIntranetApplikationen()
{
    debugToConsole("initIntranetApplikationen Enter");

    var hide_display_elements = [];
    hide_display_elements[0] = getDivElementIntranetPageContent();

    // Number of directory levels to top directory for directory /www/XML/
    var n_level_xml = 3;

    createObjectWebLoginLogout(hide_display_elements, n_level_xml);

    debugToConsole("initIntranetApplikationen Exit");

} // initIntranetApplikationen

// Main (onload) function for the web page /Administration/Logos/Logos.htm
// 1. Set the array of elements that shall be displayed only after login
// 2. Create the object WebLoginLogout. Call createObjectWebLoginLogout
function initIntranetLogos()
{
    debugToConsole("initIntranetLogos Enter");

    var hide_display_elements = [];
    hide_display_elements[0] = getDivElementIntranetPageContent();

    // Number of directory levels to top directory for directory /www/XML/
    var n_level_xml = 3;

    createObjectWebLoginLogout(hide_display_elements, n_level_xml);

    debugToConsole("initIntranetLogos Exit");

} // initIntranetLogos

// Create the object WebLoginLogout
// 1. Instantiate the class WebLoginLogout. Set g_web_login_logout.
// 2. Looad
function createObjectWebLoginLogout(i_hide_display_elements, i_n_level_xml)
{
    debugToConsole("createObjectWebLoginLogout Enter");

    // Only read data for all applications except Admin Tasks
    var b_only_read_data = true;

    g_web_login_logout = new WebLoginLogout(getIdDivWebLoginLogout(), 
                          i_hide_display_elements, b_only_read_data, i_n_level_xml);

    debugToConsole("createObjectWebLoginLogout Object WebLoginLogout is created");

    g_web_login_logout.loadXml();

    debugToConsole("createObjectWebLoginLogout Exit");

} // createObjectWebLoginLogout

// Callback function after the creation of the application XML object
function createLoginControlsAfterXml()
{
    debugToConsole("createLoginControlsAfterXml Enter");

    g_web_login_logout.createLoginControlsAfterXml();
   
} // initTestAfterObjectCreation

// Event function user clicked the login-logout button
function onClickWebLoginButton()
{
    debugToConsole("onClickWebLoginButton Enter");

    g_web_login_logout.onClickWebLoginButton();

} // onClickWebLoginButton

function callbackonClickWebLoginButton(i_logged_in_name, i_b_user_has_logged_in, i_warning_msg)
{
    debugToConsole("callbackonClickWebLoginButton Enter");

    g_web_login_logout.callbackonClickWebLoginButton(i_logged_in_name, i_b_user_has_logged_in, i_warning_msg);
    
} // callbackonClickWebLoginButton

// Callback function for LoginLogout.loginIfPossible
function callbackWebLoginIfPossible(i_logged_in_name, i_b_user_has_logged_in)
{
    debugToConsole("callbackWebLoginIfPossible Enter");

    g_web_login_logout.callbackWebLoginIfPossible(i_logged_in_name, i_b_user_has_logged_in);

} // callbackWebLoginIfPossible

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Main Functions //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Get Id And Element Functions //////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Returns the identity of the <div> element for the login and logout controls
function getIdDivWebLoginLogout()
{
    return 'id_div_web_login_logout';

} // getIdDivWebLoginLogout

// Returns the element intranet page content <div> element
function getDivElementIntranetPageContent()
{
    return document.getElementById(getIdDivElementIntranetPageContent());

} // getDivElementIntranetPageContent

//Returns the identity of the intranet page content <div> element
function getIdDivElementIntranetPageContent()
{
    return 'id_intranet_page_content';

} // getIdDivElementIntranetPageContent

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Get Id And Element Functions ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Debug Functions ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Write debug data to console
function debugToConsole(i_msg_str)
{
    if (!g_write_debug_to_log)
    {
         return;
    }

    console.log('Main:' + i_msg_str);

} // debugToConsole    

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Debug Functions /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

