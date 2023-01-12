import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement, ReactElement } from 'react'

interface ActiveLinkProps extends LinkProps {
	children: ReactElement
	MatchExactHref?: boolean
}

export function ActiveLink({
	children,
	MatchExactHref = false,
	...rest
}: ActiveLinkProps) {
	const { asPath } = useRouter()

	let isActive = false

	if (MatchExactHref && (asPath === rest.href || asPath === rest.as)) {
		isActive = true
	}
	if (
		!MatchExactHref &&
		(asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
	) {
		isActive = true
	}
	return (
		<Link {...rest}>
			{cloneElement(children, {
				color: isActive ? 'pink.400' : 'gray.50',
			})}
		</Link>
	)
}
