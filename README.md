# The purpose of your project

---
# Technologies used
- HTML
- CSS
- JavaScript
- React
- HTTP Requests and Responses
- Authentication
- cURL to make API calls. 

---
# Features
- Users can search for songs by song title.
- You can also include functionality to search by other attributes like artist’s name, genre, etc.
- Users can see information about each song like title, artist, and album for songs they queried
- You can also include other information – the design is up to you
- Users can export their custom playlist to their personal Spotify account
  
---
# Future work

---

# Request an access token
curl -X POST "https://accounts.spotify.com/api/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials&client_id=f682906707d74314bb950ec4e109670d&client_secret=5765c071083c4641a89e08e0576b7fb3"


     {"access_token":"BQBOW-UmL2NPjwzGyh-n98qh_YPR-5LzVDlD9u1TATrcVbriayNkHdX8p0NjdR7Oeoft5WlD_hqqytR7F7xLk5M2N8Gz4Hxn_GzaktkS4VVyPU9A4XY","token_type":"Bearer","expires_in":3600}%      

# Request artist data

https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02?si=USzGQl5ySpW2QS7rn1bKmw