# ![My face in pixels][icon] chrome-notes

Chrome Notes (working title) is an extension written for the Google Chrome web browser.

## Background

I have often found, while reading articles, tutorials, etc., that I would like to add a note for myself,
such as a link to a related resource, a reflection on or reaction to the text, etc. I tried
searching for an existing "sticky-note" type extension, and found a few, but none had everything
I wanted, and ultimately I think I build a better one.


## Features

##### Essentials: What I require of the extension
* Syncing with the Chrome cloud so that notes are preserved between browsers when a user "Sign[s] in to Chrome".
* Note backgrounds should be semi-transparent, to help prevent blocking large sections of the text.
* Notes should be fully resizeable, recolorable, future-editable, and removeable.
* The whole system should be intuitive.
* Users must be able to share these notes with others (see [Sharing](#sharing)).

##### Would be nice: What I envision for the extension
* Allow HTML input and interpretation.
* Allow JavaScript input to run.
* Allow Markdown input and interpretation.
* Allow full color theming.
* Provide "Advanced Settings" to allow thorough customization.
* Allow plugins (This one is a long shot, but I don't think it would be hard to build for).


<a name="sharing"></a>
## Sharing

It would be very useful to people working on the same project or investigating the same subjects to read the each
others' thoughts and remarks on an article or a tutorial. I don't mean anyone; that's what comments are for. I mean,
for example, if you are a college student working on a group project and you find a quote you like in an article.
It would be quite useful to be able to simply direct your partners to the page and know that they will see the notes
you have attached in the correct spots on the page.

Here are a few ways I think this should be possible (\* requires the recipient to also have the extension installed):
* Share the link to the page, with querystrings added by the extension to later be interpreted by the recipient's instance
  of the extension to dynamically generate the notes you added. \*
* Allow user profiles and user groups, where anyone added to the same group can see notes placed by others in the group. \*
* Allow a server-mediated version of the page, perhaps, shareable on Facebook, Twitter, etc. through minified links that dynamically
  intercepts the page and adds the user's saved notes to it before presenting it to the user. This would be tough, but interesting.
* Allow links to be exported and imported. \*


## Use Cases

* Sharing notes on articles for a team project.
* A group investigating a subject with each other, for fun or education.
* A "scavenger hunt" across the web within a user group.
* Leaving "secret messages" and "Easter Eggs" for other members of a user group around the web.
* Leaving notes for yourself on important thoughts you had while reading a text.


## Alternatives

Here are a few contenders I found and tried. Please note that this is not a comprehensive list, but it is quite 
representative of the sampling that is out there.

### [Sticky Notes]
This extension is like several I found that allow adding notes to a page via a popup but do not allow 
placing notes around the page.


### [Self-stick Notes] 
This extension is a very basic version of the sort of thing I plan to do with this extension.  
##### Problems:
* You can't edit a note once it is placed.
* Notes are not resizeable.
* Notes are opaque and block large sections of the page.


### [Web Page Sticky Notes]
Honestly, this extension is really great. It is the best one I've found already out there. If not for the lack of syncing 
or sharing notes, I would probably just stick with this guy, but I plan on adding so much more.
##### Features:
* Places notes and retrieving them on page reload.
* Notes can be resized and recolored.
* Allows exporting and importing of notes.
* Notes can be "global", meaning they appear on every page.
* Definitely aesthetically pleasing, while remaining simple enough to not provide distraction.
* Optionally allows HTML input, including pictures (but not script tags).  
##### Problems:
* Does not allow syncing with the cloud, because the creator decided it was not worth the limited storage compared to Local Storage.
* Still opaque, though being able to resize the note makes it easier to avoid hiding text.



[Self-stick Notes]: <https://chrome.google.com/webstore/detail/self-stick-notes/hcdihnnnfbdeinkamogggghnmcfaebca/related>
[Sticky Notes]: <https://chrome.google.com/webstore/detail/sticky-notes/olheifdopmpaahjgbobbhnnidpoigjoa/related>
[Web Page Sticky Notes]: <https://chrome.google.com/webstore/detail/web-page-sticky-notes/alpjieidnmmkljnceakgpeajlngabnee/related>


[icon]: <http://kenbellows.com/favicon2.ico> "My face in pixels"