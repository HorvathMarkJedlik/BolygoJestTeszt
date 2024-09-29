const PlanetAgeName = require('./script.js')

test("Ha nem sztringet adnak meg, akkor hibát fog dobni", () =>{
    expect(() => PlanetAgeName(12, 12)).toThrow("Csak betűket adhatsz meg!")
})
test("Nem egész életkor megadásakor hibát kéne dobnia", () => {
    expect(()=> PlanetAgeName("mercury", 12.5)).toThrow("Nem egész számot adtál meg!")
})

test("Nem létező bolygó névnél hibát kell adnia", () =>{
    expect(()=> PlanetAgeName("pluto", 19).toThrow("Nem létező bolygó!"))
})

test("A megfelelő életkort kell visszadnia", () =>{
    expect(PlanetAgeName("earth", 20)).toBe(20)
})
