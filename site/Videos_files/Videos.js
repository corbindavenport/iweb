// Created by iWeb 3.0.4 local-build-20251012

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id4" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="505" height="300" style="height: 300px; left: 22px; position: absolute; top: 90px; width: 505px; z-index: 1; "><param name="src" value="Media/199d02c358464-master_playlist.MP4" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id4" type="video/quicktime" width="505" height="300" style="height: 300px; left: 22px; position: absolute; top: 90px; width: 505px; z-index: 1; "><param name="src" value="Videos_files/199d02c358464-master_playlist.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/199d02c358464-master_playlist.MP4"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id4" type="video/quicktime" width="505" height="300" data="Media/199d02c358464-master_playlist.MP4" style="height: 300px; left: 22px; position: absolute; top: 90px; width: 505px; z-index: 1; "><param name="src" value="Media/199d02c358464-master_playlist.MP4"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
function writeMovie2()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id7" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="505" height="300" style="height: 300px; left: 22px; position: absolute; top: 443px; width: 505px; z-index: 1; "><param name="src" value="Media/IMG_1351.MOV" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id7" type="video/quicktime" width="505" height="300" style="height: 300px; left: 22px; position: absolute; top: 443px; width: 505px; z-index: 1; "><param name="src" value="Videos_files/IMG_1351-1.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/IMG_1351.MOV"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id7" type="video/quicktime" width="505" height="300" data="Media/IMG_1351.MOV" style="height: 300px; left: 22px; position: absolute; top: 443px; width: 505px; z-index: 1; "><param name="src" value="Media/IMG_1351.MOV"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:5,offset:new IWPoint(-0.0000,1.0000),color:'#000000',opacity:0.500000}),stroke_0:new IWPhotoFrame([IWCreateImage('Videos_files/PrintedPaper_frame_01.png'),IWCreateImage('Videos_files/PrintedPaper_frame_02.png'),IWCreateImage('Videos_files/PrintedPaper_frame_03.png'),IWCreateImage('Videos_files/PrintedPaper_frame_06.png'),IWCreateImage('Videos_files/PrintedPaper_frame_09.png'),IWCreateImage('Videos_files/PrintedPaper_frame_08.png'),IWCreateImage('Videos_files/PrintedPaper_frame_07.png'),IWCreateImage('Videos_files/PrintedPaper_frame_04.png')],null,0,1.000000,0.000000,0.000000,0.000000,0.000000,6.000000,6.000000,6.000000,6.000000,9.000000,9.000000,9.000000,9.000000,null,null,null,0.500000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Videos_files/VideosMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id8');adjustFontSizeIfTooBig('id8');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
