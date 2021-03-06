import {Box, Flex, Link, Sticky, StyledOcticon} from '@primer/components'
import {
  ChevronRight,
  MarkGithub,
  ThreeBars,
  Search as SearchIcon,
} from '@primer/octicons-react'
import {Link as GatsbyLink} from 'gatsby'
import React from 'react'
import {ThemeContext} from 'styled-components'
import primerNavItems from '../primer-nav.yml'
import useSiteMetadata from '@primer/gatsby-theme-doctocat/src/use-site-metadata'
import DarkButton from '@primer/gatsby-theme-doctocat/src/components/dark-button'
import NavDrawer, {useNavDrawerState} from '@primer/gatsby-theme-doctocat/src/components/nav-drawer'
import NavDropdown, {NavDropdownItem} from '@primer/gatsby-theme-doctocat/src/components/nav-dropdown'
import Search from '@primer/gatsby-theme-doctocat/src/components/search'
import MobileSearch from '@primer/gatsby-theme-doctocat/src/components/mobile-search'

Header.defaultProps = {
  isSearchEnabled: true,
}

function Header({isSearchEnabled}) {
  const theme = React.useContext(ThemeContext)
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useNavDrawerState(
    theme.breakpoints[2],
  )
  const [isMobileSearchOpen, setIsMobileSearchOpen] = React.useState(false)
  const siteMetadata = useSiteMetadata()
  console.log(MarkGithub)
  return (
    <Sticky>
      <Flex
        py={3}
        px={[3, null, null, 4]}
        alignItems="center"
        justifyContent="space-between"
        bg="black"
      >
        <Flex alignItems="center">
          <Link
            href="https://primer.style"
            color="blue.4"
            mr={3}
            lineHeight="condensedUltra"
          >
            <StyledOcticon icon={MarkGithub} size="medium" />
          </Link>
          <Link
            display={[
              // We only hide "Primer" on small viewports if a shortName is defined.
              siteMetadata.shortName ? 'none' : 'inline-block',
              null,
              null,
              'inline-block',
            ]}
            href="https://durumi.io"
            color="blue.4"
            fontFamily="mono"
          >
            team-durumi
          </Link>

          {siteMetadata.shortName ? (
            <>
              <Box display={['none', null, null, 'inline-block']} mx={2}>
                <StyledOcticon icon={ChevronRight} color="blue.4" />
              </Box>
              <Link as={GatsbyLink} to="/" color="blue.4" fontFamily="mono">
                {siteMetadata.shortName}
              </Link>
            </>
          ) : null}

          {isSearchEnabled ? (
            <Box display={['none', null, null, 'block']} ml={4}>
              <Search />
            </Box>
          ) : null}
        </Flex>
        <Flex>
          <Box display={['none', null, null, 'block']}>
            <PrimerNavItems items={primerNavItems} />
          </Box>
          <Flex display={['flex', null, null, 'none']}>
            {isSearchEnabled ? (
              <>
                <DarkButton
                  aria-label="Search"
                  aria-expanded={isMobileSearchOpen}
                  onClick={() => setIsMobileSearchOpen(true)}
                >
                  <StyledOcticon icon={SearchIcon} />
                </DarkButton>
                <MobileSearch
                  isOpen={isMobileSearchOpen}
                  onDismiss={() => setIsMobileSearchOpen(false)}
                />
              </>
            ) : null}
            <DarkButton
              aria-label="Menu"
              aria-expanded={isNavDrawerOpen}
              onClick={() => setIsNavDrawerOpen(true)}
              ml={3}
            >
              <StyledOcticon icon={ThreeBars} />
            </DarkButton>
            <NavDrawer
              isOpen={isNavDrawerOpen}
              onDismiss={() => setIsNavDrawerOpen(false)}
            />
          </Flex>
        </Flex>
      </Flex>
    </Sticky>
  )
}

function PrimerNavItems({items}) {
  return (
    <Flex alignItems="center" color="blue.2">
      {items.map((item, index) => {
        if (item.children) {
          return (
            <Box ml={4} key={index}>
              <NavDropdown title={item.title}>
                {item.children.map(child => (
                  <NavDropdownItem key={child.title} href={child.url}>
                    {child.title}
                  </NavDropdownItem>
                ))}
              </NavDropdown>
            </Box>
          )
        }

        return (
          <Link
            key={index}
            href={item.url}
            display="block"
            color="inherit"
            ml={4}
          >
            {item.title}
          </Link>
        )
      })}
    </Flex>
  )
}

export default Header
