Pull Request Requirements - 

This code is for a new button - a CopyButton. 
This button, like the other button components, is built on top of the BaseButton component but adds additionally functionality. 
This button uses a copy library to copy text onto the user's clipboard on-click. 

Testing Instructions: 
- Follow the upstream repositories instructions for setting up an office-ui-fabric-react environment.
- Clone this repository instead of theirs.
- Import the CopyButton component (like in the committed example)
- Use the CopyButton and make sure to utilize the copyText property. This property will be the text that is copied to the clipboard.
- Run your application using the instructions in office-ui-fabric-react. Click on the copy component and past what is on your clipboard into a text document - is it what you put in the copyText property? Yes? It worked!

This component is independent of the code-base except that it does add a property to the BaseButton component, namely that of copyText (the text that will be copied onto the clipboard). 

Experimental Component Checklist:

  Validate file/package structure [X - Not validated - Could never get to work]
  Validating the atomic-ness of the component [check]
  Is the component unique (is it already implemented elsewhere) [check]
  Can it be broken down further [check]
  Validating the api surface [check]
  Does it have the basic expected props? [check]
  Are there naming or typing inconsistencies? [check]
  Is it hard to use or understand? [check]
  Is the documentation complete and clear? [check]
  Are the prop descriptions consistent with other prop descriptions? [check]
  Are the examples inspiring, delightful, useful, straightforward? [check - written examples are checked-in]
  Can you copy paste into a codepen? [check]
  Are the features robust enough to delight? (are we missing basic fundamentals?) [check]



