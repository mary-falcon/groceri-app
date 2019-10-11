(function(window, undefined) {
  var dictionary = {
    "03e85e4f-a8de-4928-b3dc-ce1a1d1be646": "6b Wish Lists",
    "e9e7b8d4-adc7-4627-a09a-8a6813488f6e": "3b Delete created list",
    "784327b7-98c7-4dec-a98b-126f392fbfe3": "2a Stores click",
    "c1cbcb43-8ef6-4291-b35a-92a9f36720a9": "2c Create Account",
    "ac4cbd90-de21-4c88-8d9f-1c7f9d61b5d3": "5a List after items added",
    "fa436ce8-0519-404b-b69b-d9fea123c9a6": "5b Deleted Lists",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "1 Landing Page",
    "bfe50945-8569-4f02-80e7-120c403b502c": "5b List store",
    "80df44a8-ca47-4e09-a669-08d416539dc9": "3b Save Clicked",
    "1aa08108-a9ed-47db-9f86-35c35bf57bd3": "4b Shop button",
    "ae82ce64-f7bb-423f-9dc2-15ac9e6f4613": "3b Create clicked",
    "30f51599-9da6-480c-ba89-99a5d5f64db5": "3a Click on store",
    "6cad9e92-43cd-4591-8ef6-38a8e77c3210": "2b Lists click",
    "1d849af7-8d09-4bfe-a15e-182dd86a63de": "3a Return to store",
    "1449bdcb-b951-4ac8-94ef-ecd88a19bd1d": "3b Saved list clicked",
    "6b0fcfb4-0eb9-4f00-8e3f-df19fd27fa6e": "6b Looks good clicked",
    "856a2c41-b1a4-458b-b388-ef7bd6f3a4bf": "4a Store items",
    "18a4ce9c-0e41-457a-89a4-e68aee9192a0": "Store",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "21d48bb1-58ea-461c-9c84-8c1159da67a9": "Store item",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);