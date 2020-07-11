# Google Maps Links

## Place/Address

The most basic is a simple destination. This will link directly to an address. Here are two possible ways:

```
https://www.google.com/maps/place/760+West+Genesee+Street+Syracuse+NY+13204
```
```
https://maps.google.com?q=760+West+Genesee+Street+Syracuse+NY+13204
```


## Directions (with empty starting point)

The following will link to an address and automatically focus the cursor on the starting location input. The user just types in where they are coming from and the directions are generated.
```
https://maps.google.com?daddr=760+West+Genesee+Street+Syracuse+NY+13204
```

## Directions (with set starting point)

No user input is required as there is a starting and ending direction pre-propagated. Here are a few possible methods for doing so:
```
https://www.google.com/maps/dir/760+West+Genesee+Street+Syracuse+NY+13204/314+Avery+Avenue+Syracuse+NY+13204
```
```
https://maps.google.com?saddr=760+West+Genesee+Street+Syracuse+NY+13204&daddr=314+Avery+Avenue+Syracuse+NY+13204
```

## Directions (detect user's current location as starting point)

By simply including "Current Location" in the starting point input field, Google will detect the user's location and automatically generate directions based on where they are right now. The string "My Location" can also work, but "Current Location" seems to have a higher success rate.
```
https://www.google.com/maps/dir/Current+Location/760+West+Genesee+Street+Syracuse+NY+13204
```
```
https://maps.google.com?saddr=Current+Location&daddr=760+West+Genesee+Street+Syracuse+NY+13204
```

## Directions (with latitude / longitude coordinates)

Instead of using an address, you could also include latitude and longitude coordinates for the destination (or starting point). In this example, we're also using "Current Location" as the starting point.
```
https://www.google.com/maps/dir/Current+Location/43.12345,-76.12345
```
```
https://maps.google.com?saddr=Current+Location&daddr=43.12345,-76.12345
```

## Directions (multiple destinations from set location)

Using the updated syntax, we can just keep adding destinations to the URL!
```
https://www.google.com/maps/dir/760+W+Genesee+St+Syracuse+NY+13204/314+Avery+Ave+Syracuse+NY+13204/9090+Destiny+USA+Dr+Syracuse+NY+13204
```

## Query Search

You could link to a search query of nearby places of an address or in this case coordinates. Change the "q=food" to whatever search you'd like. You can control the default zoom level with ",14z" or "&z=14 at the end of the URL (Zoom range is 0–19. 0 = Furthest Away, 19 = Closest In).
```
https://www.google.com/maps/search/food/43.12345,-76.12345,14z
```
```
https://maps.google.com?ll=43.12345,-76.12345&q=food&z=14
```

## Destination Query

If you don't know the address or GPS coordinates of the destination (or starting point for that matter), you could include a business name as the field instead and let Google determine what you mean. Obviously, you need to be careful with this one because it could serve a different location than you intend.
```
https://www.google.com/maps/dir/Current+Location/Pinckney+Hugo+Group
```
```
https://maps.google.com?saddr=Current+Location&daddr=Pinckney+Hugo+Group
```