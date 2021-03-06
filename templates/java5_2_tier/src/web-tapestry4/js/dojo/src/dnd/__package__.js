/*
	Copyright (c) 2004-2005, The Dojo Foundation
	All Rights Reserved.

	Licensed under the Academic Free License version 2.1 or above OR the
	modified BSD license. For more information on Dojo licensing, see:

		http://dojotoolkit.org/community/licensing.shtml
*/

dojo.hostenv.conditionalLoadModule({
	common: ["dojo.dnd.DragAndDrop"],
	browser: ["dojo.dnd.HtmlDragAndDrop"],
	dashboard: ["dojo.dnd.HtmlDragAndDrop"]
});
dojo.hostenv.moduleLoaded("dojo.dnd.*");
