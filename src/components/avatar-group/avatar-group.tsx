import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {
  NavigationMenu, NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

export interface Author {
  name: string,
  avatar: string
  description: string
}

export const TEAM : Author[]= [
  {
    name: "Tom",
    avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=3",
    description: "A junior engineer known for his energy and enthusiasm. He’s always quick to jump into action, tackling issues with speed and determination. His ability to swiftly fix problems makes him a reliable first responder in any technical situation."
  },
  {name: "Peter", avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=1", description: "A senior engineer with a calm and thoughtful demeanor. He takes his time to analyze problems thoroughly, ensuring that solutions address the underlying causes. Peter’s methodical approach and attention to detail lead to stable and long-lasting outcomes."},
  {name: "Bob", avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=2", description: "The principal engineer and team leader who brings a wealth of experience and wisdom. He is patient and supportive, guiding the team with a steady hand. Bob’s deep understanding of the field and his ability to see the bigger picture help the team navigate complex challenges effectively."},
]

export default function AvatarGroup() {
  return (
    <div className="pl-4">
      <NavigationMenu>
        <NavigationMenuList>
          {
            TEAM.map((u, index) => (
              <NavigationMenuItem key={u.name}>
                <NavigationMenuTrigger className="-ml-2 w-8">
                  <Avatar key={index} className="">
                    <AvatarImage src={u.avatar} alt=""/>
                  </Avatar>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex flex-col gap-3 p-6 md:w-[400px] lg:w-[500px]">
                    <div className="flex gap-4 items-end">
                      <Avatar key={index} className="">
                        <AvatarImage src={u.avatar} alt=""/>
                      </Avatar>
                      <div className="text-2xl font-semibold">
                        {u.name}
                      </div>
                    </div>
                    <div>
                      {u.description}

                    </div>
                  </div>

                </NavigationMenuContent>
              </NavigationMenuItem>
            ))
          }
          <NavigationMenuItem key="status">
            <NavigationMenuTrigger className="-ml-2 w-fit">
              <div className="font-semibold bg-slate-300/60 rounded-xl flex items-center justify-center px-4 h-8">
                3 online
                <span className="h-2 w-2 rounded-full bg-green-500 ml-2"></span>
              </div>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                More engineers will be joining us soon.
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
