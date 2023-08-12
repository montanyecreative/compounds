import Menu from "./menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

export default function Home() {
	return (
		<main className="flex" style={{ backgroundColor: "#F3F3F3" }}>
			<div className="mx-5 w-full">
				<h1 className="text-3xl mt-5">Brews</h1>
				<div className="brews-add" style={{ position: "absolute", top: "30px", right: "20px" }}>
					<Dialog>
						<DialogTrigger>Add</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Are you sure absolutely sure?</DialogTitle>
								<DialogDescription>
									This action cannot be undone. This will permanently delete your account and remove your data from our
									servers.
								</DialogDescription>
							</DialogHeader>
						</DialogContent>
					</Dialog>
				</div>
				<div className="brews">
					<Card className="my-3">
						<CardHeader>
							<CardTitle>Coffee Name</CardTitle>
						</CardHeader>
						<Separator style={{ marginBottom: "5px" }} />
						<CardContent className="grid grid-cols-4 gap-3">
							<div className="grid grid-cols-1">
								<p className="font-bold">Region</p>
								<p>Region Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Roast</p>
								<p>Roast Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Roast Date</p>
								<p>Roast Date Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Process</p>
								<p>Process Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Brew Method</p>
								<p>Brew Method Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Grind Setting</p>
								<p>Grind Setting Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Water Temp</p>
								<p>Water Temp Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Dose</p>
								<p>Dose Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Water In</p>
								<p>Water In Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Brew Time</p>
								<p>Brew Time Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Notes</p>
								<p>Notes Test Data</p>
							</div>
						</CardContent>
					</Card>
					<Card className="my-3">
						<CardHeader>
							<CardTitle>Coffee Name</CardTitle>
						</CardHeader>
						<Separator style={{ marginBottom: "5px" }} />
						<CardContent className="grid grid-cols-4 gap-3">
							<div className="grid grid-cols-1">
								<p className="font-bold">Region</p>
								<p>Region Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Roast</p>
								<p>Roast Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Roast Date</p>
								<p>Roast Date Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Process</p>
								<p>Process Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Brew Method</p>
								<p>Brew Method Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Grind Setting</p>
								<p>Grind Setting Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Water Temp</p>
								<p>Water Temp Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Dose</p>
								<p>Dose Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Water In</p>
								<p>Water In Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Brew Time</p>
								<p>Brew Time Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Notes</p>
								<p>Notes Test Data</p>
							</div>
						</CardContent>
					</Card>
					<Card className="my-3">
						<CardHeader>
							<CardTitle>Coffee Name</CardTitle>
						</CardHeader>
						<Separator style={{ marginBottom: "5px" }} />
						<CardContent className="grid grid-cols-4 gap-3">
							<div className="grid grid-cols-1">
								<p className="font-bold">Region</p>
								<p>Region Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Roast</p>
								<p>Roast Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Roast Date</p>
								<p>Roast Date Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Process</p>
								<p>Process Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Brew Method</p>
								<p>Brew Method Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p>Grind Setting</p>
								<p>Grind Setting Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Water Temp</p>
								<p>Water Temp Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Dose</p>
								<p>Dose Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Water In</p>
								<p>Water In Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Brew Time</p>
								<p>Brew Time Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Notes</p>
								<p>Notes Test Data</p>
							</div>
						</CardContent>
					</Card>
					<Card className="my-3">
						<CardHeader>
							<CardTitle>Coffee Name</CardTitle>
						</CardHeader>
						<Separator style={{ marginBottom: "5px" }} />
						<CardContent className="grid grid-cols-4 gap-3">
							<div className="grid grid-cols-1">
								<p className="font-bold">Region</p>
								<p>Region Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Roast</p>
								<p>Roast Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Roast Date</p>
								<p>Roast Date Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Process</p>
								<p>Process Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Brew Method</p>
								<p>Brew Method Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Grind Setting</p>
								<p>Grind Setting Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Water Temp</p>
								<p>Water Temp Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Dose</p>
								<p>Dose Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Water In</p>
								<p>Water In Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Brew Time</p>
								<p>Brew Time Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Notes</p>
								<p>Notes Test Data</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
			<Menu />
		</main>
	);
}
