export function emailValidator(email: string): [boolean, string | null] {
  const tester =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/

  if (!email) return [false, null]

  const emailParts = email.split("@")

  if (emailParts.length !== 2) return [false, null]

  const account = emailParts[0]
  const address = emailParts[1]

  if (account.length > 64) return [false, null]
  else if (address.length > 255) return [false, null]

  const domainParts = address.split(".")
  if (
    domainParts.some(function (part) {
      return part.length > 63
    })
  )
    return [false, null]

  if (!tester.test(email)) return [false, null]

  return [true, account]
}

export function parseNameFromEmail(email: string): string {
  const [isEmail, name] = emailValidator(email)
  if (isEmail) {
    return name
  } else throw new Error("유효한 이메일 형식이 아닙니다.")
}
