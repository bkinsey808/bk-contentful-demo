import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const NavigationMenuRoot = () => (
  <NavigationMenu.Root>
    <NavigationMenu.List className="flex">
      <NavigationMenu.Item>
        <NavigationMenu.Trigger>Item one</NavigationMenu.Trigger>
        <NavigationMenu.Content className="absolute border-2 bg-white">
          Item one content
        </NavigationMenu.Content>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Trigger>Item two</NavigationMenu.Trigger>
        <NavigationMenu.Content className="absolute border-2 bg-white">
          <NavigationMenu.Sub orientation="horizontal">
            <NavigationMenu.List>
              <NavigationMenu.Item className="relative">
                <NavigationMenu.Trigger>Item three</NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute left-[100%] top-0 border-2 bg-white">
                  Item three content
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              <NavigationMenu.Item className="relative">
                <NavigationMenu.Trigger>Item Four</NavigationMenu.Trigger>

                <NavigationMenu.Content className="absolute top-0 left-[100%] border-2 bg-white">
                  Item four content
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            </NavigationMenu.List>
            <NavigationMenu.Viewport asChild={true} />
          </NavigationMenu.Sub>
        </NavigationMenu.Content>
      </NavigationMenu.Item>
    </NavigationMenu.List>
    {/* NavigationMenu.Content will be rendered here when active */}
    <NavigationMenu.Viewport asChild={true} />
  </NavigationMenu.Root>
);

export default NavigationMenuRoot;
