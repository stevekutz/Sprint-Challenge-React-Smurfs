1.  Explain the differences between `client-side routing` and `server-side routing`.
    Server-side routing causes whole page refreshes(new document served). Although SEO
    was tuned initially for server-side routing, recent improvements make this not so
    much of an issue.
    
    Client-side routing is where the entire page is loaded and is dynamically rendered
    via JavaScript via components and state. This allows different pages(views) to be
    displayed very quickly since no page refresh is needed. The initial page loading is
    usually slower than with server-side since everything(all pages) are downloaded. 
    Some may never be accessed, but for those page that are will demonstrate very fast, 
    smooth transitions.

1.  What does HTTP stand for?
    HyperText Transfer protocol

1.  What does CRUD stand for?
    C => Create,
    R => Read, 
    U => Update,
    D => Delete
    
1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    C => Post, 
    R => Get, 
    U => Put, 
    D => Delete

1.  Mention three tools we can use to make AJAX requests
    1 & 2. Axios & Fetch(both use promises),
    3. XMLHttpRequest via JavaScript(very complex to set up)
    4. jQuery uses $.ajax()
    5. SuperAgent(AJAX LIbrary)
    6. Request(calls itself a simplified HTTP Client)
 